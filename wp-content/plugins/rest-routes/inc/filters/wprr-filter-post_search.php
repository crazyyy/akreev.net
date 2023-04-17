<?php

add_filter( 'wprr_filter_query', 'route_filter_title', 10, 2 );

function route_filter_title( $args, $post_id ){

    $title = get_post_meta( $post_id, '_wprr_search', true );

    if ( $title ) {
        $args['s'] = $title;
    }

    return $args;
}

add_filter( 'wprr_add_filter_elements', 'route_add_filter_element_title', 10, 2);

function route_add_filter_element_title($output, $post_id){

    $title = unserialize( get_post_meta( $post_id, '_wprr_search', true ) );

    $output .= '<table class="form-table">
				    <tbody>
				        <tr>
						    <th scope="row">Post Search</th>
						    <td>
						        <fieldset>';

    $output .= '
					            		<label for="wprr_post_type">
							                <input type="text" value="' . $title . '" id="wprr_title" name="wprr_title">
							            </label><br />
					            	';

    $output .= '			</fieldset>
						    </td>
						</tr>
				    </tbody>
				</table>';

    echo $output;
}

add_action( 'wprr_save_fields', 'route_save_field_title', 10, 2 );

function route_save_field_title( $fields, $post_id ){
    $title = $fields['wprr_title'];
    update_post_meta( $post_id, '_wprr_search', $title );

}

add_filter( 'wprr_add_filter_indexes', 'route_add_filter_index_title', 10 );

function route_add_filter_index_title( $output ){

    $output .= '<li data-wprr-index="title"><a>Post Search</a></li>';

    return $output;
}

add_filter( 'wprr_add_filter_contents', 'route_add_filter_content_title', 10, 2 );

function route_add_filter_content_title( $output, $post_id ){

    $title = get_post_meta( $post_id, '_wprr_search', true );

    $output .= '
			<div id="wprr_title_content">	
				<table class="form-table">
				    <tbody>
				        <tr>
						    <th scope="row">Post Search</th>
						    <td>
						        <fieldset>';

    $output .= '
					            		<label for="wprr_post_title">
							                <input type="text" value="'.$title.'" id="wprr_title" name="wprr_title">
							            </label><br />
					            	';

    $output .= '			</fieldset>
						    </td>
						</tr>
				    </tbody>
				</table>
			</div>';

    return $output;
}

?>