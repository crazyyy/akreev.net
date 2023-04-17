<?php

add_filter( 'wprr_filter_query', 'route_filter_category_exclude', 10, 2 );

function route_filter_category_exclude( $args, $post_id ){

	$category = array_filter( unserialize( get_post_meta( $post_id, '_wprr_category_exclude', true ) ) );

	if( isset( $category ) && ( $category != '' ) && ( $category ) ){

			$args['category__not_in'] = $category;

	}

	return $args;
}

add_filter( 'wprr_add_filter_elements', 'route_add_filter_element_category_exclude', 10, 2);

function route_add_filter_element_category_exclude($output, $post_id){

	$category = unserialize( get_post_meta( $post_id, '_wprr_category_exclude', true ) );

	$output .= '<table class="form-table">
				    <tbody>
				        <tr>
						    <th scope="row">Exclude Category</th>
						    <td>
						        <fieldset>';

					            	$output .= '
					            		<label for="wprr_category">
							                <input type="text" value="'.implode(", ", $category).'" id="_wprr_category_exclude" name="wprr_category_exclude">
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

add_action( 'wprr_save_fields', 'route_save_field_category_exclude', 10, 2 );

function route_save_field_category_exclude( $fields, $post_id ){

	$category = serialize( explode( ',', $fields['wprr_category_exclude'] ) );
	update_post_meta( $post_id, '_wprr_category_exclude', $category );

}

?>