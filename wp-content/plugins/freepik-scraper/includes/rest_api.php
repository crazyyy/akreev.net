<?php

// ToDo: Write Wordpress REST API function that for create, show and update posts for already registered custom post type "collections" with title, content, thumbnails and ACF fields: gallery (ACF gallery field),  gallery_id (ACF Number field),  collection_size (ACF Number field),  collection_url (ACF text field), original_description (ACF text area field). Add descriptions, comments and examples how to use it

function freepik_scraper_collections_rest_routes() {
    // Register REST API routes for Collections
    register_rest_route( 'wp/v2', '/collection/(?P<id>\d+)', array(
        'methods' => 'GET',
        'callback' => 'freepik_scraper_get_collections'
    ) );

    register_rest_route( 'wp/v2', '/collection', array(
        'methods' => 'POST',
        'callback' => 'freepik_scraper_create_collection'
    ) );

    register_rest_route( 'wp/v2', '/collection/(?P<id>\d+)', array(
        'methods' => 'PUT',
        'callback' => 'freepik_scraper_update_collection'
    ) );
}

// Get Collections through the REST API
function freepik_scraper_get_collections($data) {
    $args = array(
        'post_type' => 'collection',
        'posts_per_page' => -1,
        'p' => $data['id'],
        'post_status' => 'publish'
    );

    $query = new WP_Query( $args );
    $results = array();

    while ( $query->have_posts() ) {
        $query->the_post();

        $post_id = get_the_ID();
        $thumbnail_url_array = wp_get_attachment_image_src( get_post_thumbnail_id($post_id), 'full', false );
        $thumbnail_url = $thumbnail_url_array[0];

        $result = array(
            'id' => $post_id,
            'title' => get_the_title(),
            'content' => get_the_content(),
            'thumbnail' => $thumbnail_url,
            'gallery' => get_field('gallery'),
            'gallery_id' => get_field('gallery_id'),
            'collection_size' => get_field('collection_size'),
            'collection_url' => get_field('collection_url'),
            'original_description' => get_field('original_description')
        );

        array_push( $results, $result );
    }

    return $results;
}

// Create Collection through the REST API
function freepik_scraper_create_collection($data) {
    $post = array(
        'post_title' => $data['title'],
        'post_content' => $data['content'],
        'post_type' => 'collection',
        'post_status' => 'publish'
    );

    $post_id = wp_insert_post( $post );

    if ( is_wp_error( $post_id ) ) {
        return $post_id;
    } else {
        // Update ACF Fields
        update_field('gallery', $data['gallery'], $post_id);
        update_field('gallery_id', $data['gallery_id'], $post_id);
        update_field('collection_size', $data['collection_size'], $post_id);
        update_field('collection_url', $data['collection_url'], $post_id);
        update_field('original_description', $data['original_description'], $post_id);

        // Upload Thumbnail to Media Library
        if ( isset( $data['thumbnail'] ) && ! empty( $data['thumbnail'] ) ) {
            // Get the image URL from the request
            $img_url = $data['thumbnail'];

            // Store the image locally as a temporary file
            $uploads = wp_upload_dir();
            $file_path = $uploads['path'] . '/' . basename($img_url);
            $file = file_get_contents($img_url);
            file_put_contents($file_path, $file);

            // Prepare an array of post thumbnail data to insert into the media library
            $attachment = array(
                'post_mime_type' => wp_check_filetype(basename($file_path), null)['type'],
                'post_title' => preg_replace('/\.[^.]+$/', '', basename($file_path)),
                'post_content' => '',
                'post_status' => 'inherit'
            );

            // Insert the attachment into the media library and set it as the post thumbnail
            $attach_id = wp_insert_attachment($attachment, $file_path, $post_id);
            set_post_thumbnail($post_id, $attach_id);

            // Delete the temporary image file from the server
            unlink($file_path);
        }

        return array(
            'success' => true,
            'id' => $post_id,
            'message' => __( 'Collection created successfully.' )
        );
    }
}

// Update Collection through the REST API
function freepik_scraper_update_collection($data) {
    $post = array(
        'ID' => $data['id'],
        'post_title' => $data['title'],
        'post_content' => $data['content'],
        'post_type' => 'collection',
        'post_status' => 'publish'
    );

    $post_id = wp_update_post( $post );

    if ( is_wp_error( $post_id ) ) {
        return $post_id;
    } else {
        // Update ACF Fields
        update_field('gallery', $data['gallery'], $post_id);
        update_field('gallery_id', $data['gallery_id'], $post_id);
        update_field('collection_size', $data['collection_size'], $post_id);
        update_field('collection_url', $data['collection_url'], $post_id);
        update_field('original_description', $data['original_description'], $post_id);

        // Upload Thumbnail to Media Library
        if ( isset( $data['thumbnail'] ) && ! empty( $data['thumbnail'] ) ) {
            // Get the image URL from the request
            $img_url = $data['thumbnail'];

            // Store the image locally as a temporary file
            $uploads = wp_upload_dir();
            $file_path = $uploads['path'] . '/' . basename($img_url);
            $file = file_get_contents($img_url);
            file_put_contents($file_path, $file);

            // Prepare an array of post thumbnail data to insert into the media library
            $attachment = array(
                'post_mime_type' => wp_check_filetype(basename($file_path), null)['type'],
                'post_title' => preg_replace('/\.[^.]+$/', '', basename($file_path)),
                'post_content' => '',
                'post_status' => 'inherit'
            );

            // Insert the attachment into the media library and set it as the post thumbnail
            $attach_id = wp_insert_attachment($attachment, $file_path, $post_id);
            set_post_thumbnail($post_id, $attach_id);

            // Delete the temporary image file from the server
            unlink($file_path);
        }

        return array(
            'success' => true,
            'id' => $post_id,
            'message' => __( 'Collection updated successfully.' )
        );
    }
}

add_action( 'rest_api_init', 'freepik_scraper_collections_rest_routes' );
