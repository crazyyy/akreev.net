<?php

class RestRoutes {

	public $default_fields = array(
					'ID',
					'post_author',
					'post_date',
					'post_content',
					'post_title',
					'post_excerpt',
					'post_status',
					'post_name',
					'post_modified',
					'post_parent',
					'post_type',
					'guid',
					'menu_order',
			);

	function __construct() {

		add_action( 'init', array( $this, 'wprr_init') );

	}

	function wprr_init() {
		$this->wprr_register_post_type();

		add_action( 'add_meta_boxes', array( $this, 'wprr_meta_box_main_data' ) );
		add_action( 'save_post', array( $this, 'wprr_save_meta_box_data') );

		$this->wprr_filters();

		add_action( 'rest_api_init', function () {
		    register_rest_route( 'rest-routes/v2', '/(?P<id>[a-zA-Z-_0-9]+)', array(
			    'methods' => WP_REST_Server::READABLE,
			    'callback' => array( $this, 'custom_get_route' )
			) );
		} );

		add_action( 'admin_menu', array( $this, 'wprr_admin_menu' ) );
		add_action( 'admin_menu', array( $this, 'add_external_link_admin_submenu' ) );
	}

	function add_external_link_admin_submenu() {
		global $submenu;

        if ( !isset( $submenu['rest-routes-main'] ) ) {
            return;
        }

		$permalink = admin_url( 'edit.php?post_type=rest-routes' );
        $submenu['rest-routes-main'][1][2] = $permalink;
        $submenu['rest-routes-main'][0][0] = 'Dashboard';
	}

    public function main() {
        $content = '
          <div class="wrap">
            <div style="float: left; width: 50%; background-color: white; border: 1px solid darkgray; padding: 15px; margin-right: 10px">
            <h1>Welcome to Rest Routes!</h1>
              <p>Manage your routes or create a fresh one.</p>
              <a class="button button-primary button-hero" href="'. admin_url( 'post-new.php' ).'?post_type=rest-routes">Add New Route</a>
              <a class="button button-secondary button-hero" href="'. admin_url( 'edit.php' ).'?post_type=rest-routes">My Routes</a>
              <p>Learn below how to create your first route:</p>
              <iframe width="100%" height="300px" src="https://www.youtube.com/embed/40KitTG8c4k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
              <div style="float:left; width: 40%; background-color: white; border: 1px solid darkgray; padding: 15px">
              <h1>Go Pro for getting all the premium features</h1>
              <p><a target="_blank" href="https://www.restroutes.com/?utm_source=rest-routes-free-dashboard&utm_medium=dashboard-top&utm_campaign=go-pro">Rest Routes Pro</a> comes up with a completely redesigned interface plus lots of more features that will let you create fully customized routes.</p>
              
              <a href="'. admin_url( 'admin.php?page=rest-routes-main-pricing' ) .'" class="button button-primary button-hero" style="background-color: #f07330; border: 1px solid #f07330; box-shadow: 0 2px 0 #d16129; text-shadow: 0 2px 0 #d16129">GET REST ROUTES PRO</a>
              
              <p>Check below a little summary of what you will find into Rest Routes Pro:</p>
              <ul style="list-style-type: square; margin-left: 17px">
                <li>Redesigned interface</li>
                <li>All HTTP methods are allowed</li>
                <li>Build routes for custom database tables</li>
                <li>Build routes for posts and taxonomies creation</li>
                <li>Build routes for displaying posts and taxonomies</li>
                <li>Multiple endpoints per route</li>
                <li>Custom parameters</li>
                <li>Custom post types and taxonomies ready</li>
                <li>Powerful advanced engine for building complex custom queries</li>
                <li>Route privacy control</li>
                <li>Custom fields filter</li>
                <li>Custom parameters</li>
                <li>Custom taxonomies filter</li>
                <li>Advanced output options</li>
                <li>Posts creation</li>
                <li>Custom fields creation</li>
                <li>Custom taxonomies creation</li>
                <li>Multiple endpoints for a route</li>
                <li>Enable / disable endpoints</li>
                <li>Premium Support</li>
              </ul>
              <p><a href="http://restroutes.com/pricing/?utm_source=rest-routes-free-dashboard&utm_medium=dashboard-bot&utm_campaign=go-pro" target="_blank">Click here</a> and compare the Free features against the Pro features.</p>
              <hr>
              <h3>Building a route for displaying posts with a filter</h3>
              <iframe width="100%" height="250px" src="https://www.youtube.com/embed/HUa-AOvh998" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <h3>Building a route for creating custom posts as well as connecting custom fields and terms</h3>
              <iframe width="100%" height="250px" src="https://www.youtube.com/embed/amfbMOr-jVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
        ';
        echo $content;
    }

    function rest_routes_pro_metabox_html() {
        ?>
	    <p><a target="_blank" href="https://www.restroutes.com?utm_source=rest-routes-free-metabox&utm_medium=metabox-top&utm_campaign=go-pro">Rest Routes Pro</a> comes up with a completely redesigned interface plus lots of more features that will let you create fully customized routes.</p>

	    <a href="<?php echo admin_url( 'admin.php?page=rest-routes-main-pricing' ) ?>" class="button button-primary button-hero" style="background-color: #f07330; border: 1px solid #f07330; box-shadow: 0 2px 0 #d16129; text-shadow: 0 2px 0 #d16129">GET REST ROUTES PRO</a>

	    <p>Check below a little summary of what you will find into Rest Routes Pro:</p>
	    <ul style="list-style-type: square; margin-left: 17px">
		    <li>Redesigned interface</li>
		    <li>All HTTP methods are allowed</li>
		    <li>Build routes for custom database tables</li>
		    <li>Build routes for posts and taxonomies creation</li>
		    <li>Build routes for displaying posts and taxonomies</li>
		    <li>Multiple endpoints per route</li>
		    <li>Custom parameters</li>
		    <li>Custom post types and taxonomies ready</li>
		    <li>Powerful advanced engine for building complex custom queries</li>
		    <li>Route privacy control</li>
		    <li>Custom fields filter</li>
		    <li>Custom parameters</li>
		    <li>Custom taxonomies filter</li>
		    <li>Advanced output options</li>
		    <li>Posts creation</li>
		    <li>Custom fields creation</li>
		    <li>Custom taxonomies creation</li>
		    <li>Multiple endpoints for a route</li>
		    <li>Enable / disable endpoints</li>
		    <li>Premium Support</li>
	    </ul>
	    <p><a href="http://restroutes.com/pricing/?utm_source=rest-routes-free-metabox&utm_medium=metabox-bot&utm_campaign=go-pro" target="_blank">Click here</a> and compare the Free features against the Pro features.</p>
        <?php
    }

    function rest_routes_pro_metabox()
    {
        $screens = ['post', 'wporg_cpt'];
        foreach ($screens as $screen) {
            add_meta_box(
                'wporg_box_id',           // Unique ID
                'Custom Meta Box Title',  // Box title
                array( $this, 'rest_routes_pro_metabox_html' ),  // Content callback, must be of type callable
                $screen                   // Post type
            );
        }
    }

	function wprr_admin_menu() {

		add_menu_page('Rest Routes', 'Rest Routes', 'manage_options', 'rest-routes-main', array( $this, 'main' ),  'dashicons-share');
		add_submenu_page( 'rest-routes-main', 'Rest Routes Pro: Routes', 'Routes',
            'manage_options', 'my-routes', 'my-routes-callback' );

	}

	function wprr_admin_menu_routes(){
	}

	function wprr_register_post_type() {

		$labels = array(
			'name'               => _x( 'Routes', 'post type general name', REST_ROUTES_TEXTDOMAIN ),
			'singular_name'      => _x( 'Route', 'post type singular name', REST_ROUTES_TEXTDOMAIN ),
			'menu_name'          => _x( 'Routes', 'admin menu', REST_ROUTES_TEXTDOMAIN ),
			'name_admin_bar'     => _x( 'Route', 'add new on admin bar', REST_ROUTES_TEXTDOMAIN ),
			'add_new'            => _x( 'Add New', 'book', REST_ROUTES_TEXTDOMAIN ),
			'add_new_item'       => __( 'Add New Route',  REST_ROUTES_TEXTDOMAIN ),
			'new_item'           => __( 'New Route', REST_ROUTES_TEXTDOMAIN ),
			'edit_item'          => __( 'Edit Route', REST_ROUTES_TEXTDOMAIN ),
			'view_item'          => __( 'View Route', REST_ROUTES_TEXTDOMAIN ),
			'all_items'          => __( 'All Routes', REST_ROUTES_TEXTDOMAIN ),
			'search_items'       => __( 'Search Routes', REST_ROUTES_TEXTDOMAIN ),
			'parent_item_colon'  => __( 'Parent Routes:', REST_ROUTES_TEXTDOMAIN ),
			'not_found'          => __( 'No routes found.', REST_ROUTES_TEXTDOMAIN ),
			'not_found_in_trash' => __( 'No routes found in Trash.', REST_ROUTES_TEXTDOMAIN )
		);

		$args = array(
			'labels'             => $labels,
	        'description'        => __( 'Description.', REST_ROUTES_TEXTDOMAIN ),
			'public'             => false,
			'publicly_queryable' => false,
			'show_ui'            => true,
			'show_in_menu'       => false,
			'query_var'          => false,
			'rewrite'            => array( 'slug' => 'rest-routes' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title' )
		);

		register_post_type( 'rest-routes', $args );
	}

	function wprr_meta_box_main_data() {

		$screens = array( 'rest-routes' );

		foreach ( $screens as $screen ) {

			add_meta_box(
				'wprr_query_builder',
				__( 'Query Builder', REST_ROUTES_TEXTDOMAIN ),
				array( $this, 'wprr_query_builder_callback' ),
				$screen
			);

			add_meta_box(
				'wprr_content_output',
				__( 'Content Output', REST_ROUTES_TEXTDOMAIN ),
				array( $this, 'wprr_content_output_callback' ),
				$screen
			);

			add_meta_box(
				'wprr_route_info',
				__( 'Route Details', REST_ROUTES_TEXTDOMAIN ),
				array( $this, 'wprr_route_details_callback' ),
				$screen
			);

        add_meta_box(
            'wprr_pro',
            __( 'Rest Routes Pro', REST_ROUTES_TEXTDOMAIN ),
            array( $this, 'rest_routes_pro_metabox_html' ),
            $screen,
		        'side'
        );
		}
	}

	function wprr_query_builder_callback( $post ) {

		// Add a nonce field so we can check for it later.
		wp_nonce_field( 'wprr_save_meta_box_data', 'wprr_meta_box_nonce' );

		$output = '';

		echo '
		<style>
			.route-container .index-column{
				float: left;
				width: 20%;
				clear: both;
			}

			.route-container .content-column{
				float: left;
				width: 70%;
				padding: 10px;
			}

			.route-container .index-column ul{
			    margin: 0px;
			}

			.route-container .index-column ul li {
			    background: #F1F1F1;
			    display: block;
			    padding: 10px;
			    margin-bottom: 0px;
			    border: 1px solid #E5E5E5;
			    border-left: none;
			    border-top: none;
			}

			.route-container .index-column ul li a{
				text-decoration: none;
			}

			.route-container .index-column ul li:hover{
				background: #E5E5E5;
				cursor: pointer;
			}

			.route-container .index-column ul .item-active{
				background: #E5E5E5;
				cursor: pointer;
			}

			#wprr_query_builder .inside{
				margin: 0px;
				padding: 0px;
			}

			#wprr_query_builder .clean{
				clear: both;
			}

			#wprr_query_builder .form-table th{
				padding: 0px;
			}

			#wprr_query_builder .form-table td{
				padding: 0px;
			}

			.wprr-output-fields td{
				padding: 0px;
			}
		}

		</style>

		<script>

			jQuery("document").ready(function(){
				jQuery(".content-column div").hide();
				jQuery("#wprr_post_type_content").show("fast");
				jQuery("#wprr_post_type_content").show("fast");
				jQuery("#wprr_index_post_type").addClass("item-active");

				jQuery(".index-column ul li").click(function(){
					wprr_index_data = jQuery(this).data("wprr-index");

					jQuery(".index-column ul li").each(function(index){
						jQuery(this).removeClass("item-active");
					});

					jQuery(".content-column div").hide();					
					jQuery("#wprr_"+wprr_index_data+"_content").show("fast");
					jQuery(this).addClass("item-active");
				});
			});

		</script>

		<form method="post">';

		$index_output = apply_filters( 'wprr_add_filter_indexes', $output );
		$content_output = apply_filters( 'wprr_add_filter_contents', $output, $post->ID );

		$output .= '
				<div class="route-container">
					<div class="index-column">
						<ul>';

		$output .= $index_output;

		$output .=     '</ul>
					</div>
					<div class="content-column">';

		$output .= $content_output;

		$output .= '</div>
					<div class="clean"></div>
				</div>
		';

		//$output = 'teste';

		//$output .= apply_filters( 'wprr_add_filter_elements', $output, $post->ID );

		echo $output;
	}

	function wprr_content_output_callback( $post ) {

		global $wpdb;

		// Add a nonce field so we can check for it later.
		wp_nonce_field( 'wprr_save_meta_box_data', 'wprr_meta_box_nonce' );

		/*
		 * Use get_post_meta() to retrieve an existing value
		 * from the database and use the value for the form.
		 */
		$value = get_post_meta( $post->ID, '_my_meta_value_key', true );

		/*
		$post_fields_arr = array(
			'ID',
			'post_author',
			'post_title',
			'post_content',
			'post_excerpt',
			'post_status',
			'comment_count',
			'post_status',
			'post_name',
			'post_type',
			'post_date',
			'post_modified',
		);
		*/
	
		$post_fields_arr = $this->default_fields;
		
		$custom_fields_query = $wpdb->get_results(
			'SELECT distinct( meta_key )
			 FROM '.$wpdb->postmeta.'
			 WHERE meta_key NOT LIKE "\_%"',
			 ARRAY_N
		);

		$post_fields = unserialize( get_post_meta($post->ID, '_wprr_output_fields', true) );

        $post_fields_arr[] = 'Post author data';
		$post_fields_arr[] = 'Post categories';
        $post_fields_arr[] = 'Featured image';
        $post_fields_arr[] = 'Attached images';
        $post_fields_arr[] = 'Attached audios';
        $post_fields_arr[] = 'Attached videos';

        $custom_fields_arr = array();
        foreach ($custom_fields_query as $key => $value) {
            foreach ($value as $key2 => $value2) {
                $custom_fields_arr[] = 'Custom Field: ' . $value2;
            }
        }

        $post_fields_arr = array_merge($post_fields_arr, $custom_fields_arr);

		$max_fields = 1;

		echo '	<p>Define the output of your custom route.</p>
				<table class="form-table wprr-output-fields">
				    <tbody>
				        <tr>
						    <th scope="row">Post Fields</th>
						    <td id="wprr_output_fields">';

						    $i = 0;

						    if( $post_fields ){

							    foreach ($post_fields as $key => $value) {

							    	$i++;

			echo '				        <fieldset id="wprr_output_fieldset_'.$i.'">
							            <label for="wprr_ordering_dir">
							                <select class="wprr_output_fields" id="wprr_output_field_'.$i.'" name="wprr_output_fields[]">
							                    <option value="default">Select a field</option>
							                ';

							                	foreach ($post_fields_arr as $key2 => $value2) {

							                	    $real_value = '';

									            	if( $value == $value2){
									            		$selected = 'selected';

									            	}else{

									            		$selected = '';

									            	}

									            	$value_print = $real_value ? $real_value : $value2;

							                		echo '<option '.$selected.' value="'.$value_print.'">'.$value2.'</option>';
							                	}

			echo '</select> <a class="wprr-remove-item button button-small" data-wprr-field="'.$i.'">Delete</a>
							            </label>
							            <br>
										</fieldset>';
								}

							}else{

								$i = 1;

			echo '				        <fieldset id="wprr_output_fieldset_'.$i.'">
							            <label for="wprr_ordering_dir">
							                <select class="wprr_output_fields" id="wprr_output_field_'.$i.'" name="wprr_output_fields[]">
							                    <option value="default">Select a field</option>
							                ';


							                	foreach ($post_fields_arr as $key2 => $value2) {

									            	if( $value == $value2){

									            		$selected = 'selected';

									            	}else{

									            		$selected = '';

									            	}

							                		echo '<option '.$selected.' value="'.$value2.'">'.$value2.'</option>';
							                	}

			echo '						    </select> <a class="wprr-remove-item button button-small" data-wprr-field="'.$i.'">Delete</a>
							            </label>
							            <br>
										</fieldset>';					

							}

		echo '				</td>';
		echo '			</tr>
						<tr>
							<th></th>
							<td class="wprr-add-field">';

		echo '<a class="wprr-add-item button button-primary button-large">Add Field</a>';					

		echo '				</td>
						</tr>
				    </tbody>
				</table>';
		echo '</form>';
		echo '<script>
				jQuery( document ).ready(function() {
					function toggleDefaultFieldRemoveField() {
						if (jQuery(".wprr_output_fields").length === 1) {
							jQuery(".wprr-remove-item").hide();
						} else {
							jQuery(".wprr-remove-item").show();
						}
                    }
                    
                    toggleDefaultFieldRemoveField();
                    
					var counter = 0;
					
				  	jQuery( ".wprr-add-item" ).click(function(event) {

					   	jQuery("#wprr_output_fields").append("<fieldset><label for=\"wprr_ordering_dir\"><select class=\"wprr_output_fields\" id=\"wprr_output_field_new_"+counter+"\" name=\"wprr_output_fields[]\"></select></label></fieldset>");
						jQuery("#wprr_output_field_1 option").clone().appendTo("#wprr_output_field_new_"+counter);
                        jQuery("#wprr_output_field_new_"+counter).val("default")
					   	counter = counter + 1;
                        toggleDefaultFieldRemoveField();

					});
                    
					jQuery(".wprr-remove-item").click(function(event){
						jQuery("#wprr_output_fieldset_"+jQuery(this).data("wprr-field")).remove();
						toggleDefaultFieldRemoveField();
					})
				});
			  </script>
			  ';

	}

	function wprr_route_details_callback( $post ) {

		$output = '';

		echo '<p>Access your custom route through the following link: 
			  <a target="_blank" href="'.site_url().'/wp-json/rest-routes/v2/'.$post->post_name.'">'.site_url().'/wp-json/rest-routes/v2/'.$post->post_name.'</a></p>';
	}

	function custom_get_route( WP_REST_Request $request) {

		global $wpdb;

		if( null !== $request->get_param( 'id' ) ){
			$route_info = $request->get_param( 'id' );
			$route = get_post( $route_info );

			if( $route != null ){
				$route_id = $route->ID;
			}else{
				$route_by_name = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $wpdb->posts WHERE post_name = %s", $route_info ) );
				$route_id = $route_by_name->ID;
			}

		}

	    return $this->wprr_get_posts(array(), $route_id, $this->default_fields);
	}

	function wprr_save_meta_box_data( $post_id ) {

		// Check if our nonce is set.
		if ( ! isset( $_POST['wprr_meta_box_nonce'] ) ) {
			return;
		}

		// Verify that the nonce is valid.
		if ( ! wp_verify_nonce( $_POST['wprr_meta_box_nonce'], 'wprr_save_meta_box_data' ) ) {
			return;
		}

		// If this is an autosave, our form has not been submitted, so we don't want to do anything.
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}

		// Check the user's permissions.
		if ( isset( $_POST['post_type'] ) && 'rest-routes' == $_POST['post_type'] ) {

			if ( ! current_user_can( 'edit_page', $post_id ) ) {
				return;
			}

		} else {

			if ( ! current_user_can( 'edit_post', $post_id ) ) {
				return;
			}
		}

		add_action( 'wprr_save_fields', 'route_save_output', 10, 2 );

		function route_save_output( $fields, $post_id ){

			$output = serialize( $fields['wprr_output_fields'] );
			update_post_meta( $post_id, '_wprr_output_fields', $output );

		}		

		do_action( 'wprr_save_fields', $_POST, $post_id );
	}

	function wprr_filters(){

		foreach ( array_reverse( glob( WPRR_INC_PATH . '/filters/wprr-filter-*.php' ) ) as $filename ) {
			include $filename;
		}

	}

    function get_endpoint_output($post_id, $default_fields, $post_ids)
    {
        $output_columns_db = unserialize(get_post_meta($post_id, '_wprr_output_fields', true));
        $output            = [];

        foreach (explode(',', $post_ids) as $post) {
            $post_data = get_post($post);

            if ( count($output_columns_db) === 1 && $output_columns_db[0] === 'default' ) {
                $output[] = $post_data;
                continue;
            }

            $item = new stdClass();

            foreach ($output_columns_db as $key => $value) {
                if (in_array($value, $default_fields, true)) {
                    $item->$value = $post_data->$value;
                }

                if ($value === 'Featured image') {
                    $featured_image = get_the_post_thumbnail_url($post);
                    if ($featured_image) {
                        $item->featured_image = $featured_image;
                    }
                }

                if ($value === 'Post author data') {
                    $item->author = (new WP_User($post_data->post_author))->data;
                    unset($item->author->user_pass);
                }

                if ( in_array($value, ['Attached images', 'Attached audios', 'Attached videos']) ) {
                    $item = $this->fill_media('image', 'attached_images', $post, $item);
                    $item = $this->fill_media('audio', 'attached_audios', $post, $item);
                    $item = $this->fill_media('video', 'attached_videos', $post, $item);
                }

                if ( strpos($value, 'Custom Field: ') !== false ) {
                    $normalized_field = str_replace('Custom Field: ', '', $value);
                    $custom_field_value = get_post_meta($post, $normalized_field, false);

                    if ( $custom_field_value ) {
                        if ( ! isset( $item->custom_fields ) ) {
                            $item->custom_fields = [];
                        }

                        $item->custom_fields[$normalized_field] = $custom_field_value;
                    }
                }

                if ( $value === 'Post categories' ) {
                    $categories = wp_get_post_terms($post, 'category');

                    if ($categories) {
                        $item->categories = array_map(function($category){
                            return $category->name;
                        }, $categories);
                    }
                }
            }

            $output[] = $item;
        }

        return $output;
    }

	private function fill_media( $type, $property_name, $post, $item ) {
        $data = get_attached_media($type, $post);

        if ( $data ) {
            $item->$property_name = [];

            foreach($data as $attachment) {
                $item->$property_name[] = $attachment->guid;
            }
        }

        return $item;
    }

	function wprr_get_posts( $args, $post_id, $default_fields ){

		global $wpdb;

		$args['fields'] = 'ids';
		$args['posts_per_page'] = -1;

		$post_ids_query = new WP_Query( apply_filters( 'wprr_filter_query', $args, $post_id ) );

		$post_ids = implode(',', $post_ids_query->posts);

		return $this->get_endpoint_output($post_id, $default_fields, $post_ids);
	}

}

?>