<?php
add_action('rest_api_init', function () {
    register_rest_route('my-plugin/v1', '/collection', [
        'methods' => 'POST',
        'callback' => 'create_collection_post',
    ]);

    register_rest_route('my-plugin/v1', '/collection/(?P<id>\d+)', [
        'methods' => ['PUT', 'DELETE'],
        'callback' => 'update_or_delete_collection_post',
    ]);
});

function create_collection_post($request)
{
    $title = sanitize_text_field($request->get_param('title'));
    $status = sanitize_text_field($request->get_param('status'));
    $gallery = $request->get_param('acf')['gallery'] ?? [];
    $gallery_id = intval($request->get_param('acf')['gallery_id'] ?? 0);
    $collection_size = intval($request->get_param('acf')['collection_size'] ?? 0);
    $collection_url = sanitize_text_field($request->get_param('acf')['collection_url'] ?? '');
    $original_description = sanitize_text_field($request->get_param('acf')['original_description'] ?? '');

    $post_id = wp_insert_post([
        'post_title' => $title,
        'post_status' => $status,
        'post_type' => 'collection',
    ], true);

    if (is_wp_error($post_id)) {
        return new WP_Error('create_error', 'There was an error creating the post', ['status' => 500]);
    }

    update_field('gallery', $gallery, $post_id);
    update_field('gallery_id', $gallery_id, $post_id);
    update_field('collection_size', $collection_size, $post_id);
    update_field('collection_url', $collection_url, $post_id);
    update_field('original_description', $original_description, $post_id);

    $post = get_post($post_id);
    $collector = new WP_REST_Posts_Controller('collection');
    return $collector->prepare_item_for_response($post, $request);
}

function update_or_delete_collection_post($request)
{
    $id = intval($request->get_param('id'));
    $post = get_post($id);

    if (empty($post) || $post->post_type !== 'collection') {
        return new WP_Error('not_found', 'Post not found.', ['status' => 404]);
    }

    switch ($request->get_method()) {
        case 'PUT':
            $title = sanitize_text_field($request->get_param('title'));
            $gallery = $request->get_param('acf')['gallery'] ?? [];
            $gallery_id = intval($request->get_param('acf')['gallery_id'] ?? 0);
            $collection_size = intval($request->get_param('acf')['collection_size'] ?? 0);
            $collection_url = sanitize_text_field($request->get_param('acf')['collection_url'] ?? '');
            $original_description = sanitize_text_field($request->get_param('acf')['original_description'] ?? '');

            wp_update_post([
                'ID' => $id,
                'post_title' => $title,
            ]);

            update_field('gallery', $gallery, $id);
            update_field('gallery_id', $gallery_id, $id);
            update_field('collection_size', $collection_size, $id);
            update_field('collection_url', $collection_url, $id);
            update_field('original_description', $original_description, $id);

            $post = get_post($id);
            $collector = new WP_REST_Posts_Controller('collection');
            return $collector->prepare_item_for_response($post, $request);

        case 'DELETE':
            wp_trash_post($id);

            return [
                'deleted' => true,
                'previous' => $collector->prepare_item_for_response($post, $request),
            ];
    }
}
