<?php

add_filter( 'wprr_filter_query', 'route_filter_post_parent_not_in', 10, 2 );

function route_filter_post_parent_not_in( $args, $post_id ){

	$post_parent_not_in = array_filter( unserialize( get_post_meta( $post_id, '_wprr_post_parent_not_in', true ) ) );

	if( isset($post_parent_not_in) && ($post_parent_not_in != '') && ( $post_parent_not_in ) ){

			$args['post_parent__not_in'] = $post_parent_not_in;

	}

	return $args;
}

add_filter( 'wprr_add_filter_elements', 'route_add_filter_element_post_parent_not_in', 10, 2);

function route_add_filter_element_post_parent_not_in($output, $post_id){

	$post_parent_not_in = unserialize( get_post_meta( $post_id, '_wprr_post_parent_not_in', true ) );

	$output .= '<table class="form-table">
				    <tbody>
				        <tr>
						    <th scope="row">Exclude Post Parent</th>
						    <td>
						        <fieldset>';

					            	$output .= '
					            		<label for="wprr_post_type">
							                <input type="text" value="'.implode(", ", $post_parent_not_in).'" id="wprr_post_parent_not_in" name="wprr_post_parent_not_in">
							            </label><br />
							            <small>Multiple ID separated by comma: 123,456,789.</small>
					            	';

		$output .= '			</fieldset>
						    </td>
						</tr>
				    </tbody>
				</table>';

		echo $output;
}

add_action( 'wprr_save_fields', 'route_save_field_post_parent_not_in', 10, 2 );

function route_save_field_post_parent_not_in( $fields, $post_id ){

	$post_parent_not_in_field = serialize( explode( ',', $fields['wprr_post_parent_not_in'] ) );
	update_post_meta( $post_id, '_wprr_post_parent_not_in', $post_parent_not_in_field );

}

?>