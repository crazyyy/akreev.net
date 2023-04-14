<?php

    register_post_type( $post_type,
        array(
            'labels' => $labels,
            'public' => true,
            'has_archive' => true,
            'hierarchical' => false,
            'menu_icon' => 'dashicons-admin-post',
            'rewrite' => array('slug' => 'collections'),
            'supports' => $supports
        )
    );

    // ACF Fields for Collections
    if ( function_exists('acf_add_local_field_group') ):

        acf_add_local_field_group(array(
            'key' => 'group_collections',
            'title' => 'Collections',
            'location' => array (
                array (
                    array (
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'collections',
                    )
                )
            ),
            'fields' => array (
                array (
                    'key' => 'field_gallery',
                    'label' => 'Gallery',
                    'name' => 'gallery',
                    'type' => 'gallery',
                    'instructions' => '',
                    'required' => 0,
                    'preview_size' => 'medium',
                    'library' => 'all',
                ),
                array (
                    'key' => 'field_gallery_id',
                    'label' => 'Gallery ID',
                    'name' => 'gallery_id',
                    'type' => 'number',
                ),
                array (
                    'key' => 'field_collection_size',
                    'label' => 'Collection Size',
                    'name' => 'collection_size',
                    'type' => 'number',
                ),
                array (
                    'key' => 'field_collection_url',
                    'label' => 'Collection URL',
                    'name' => 'collection_url',
                    'type' => 'text',
                ),
                array (
                    'key' => 'field_original_description',
                    'label' => 'Original Description',
                    'name' => 'original_description',
                    'type' => 'textarea',
                    'rows' => 5,
                    'new_lines' => '',
                )
            ),
        ));

    endif;
