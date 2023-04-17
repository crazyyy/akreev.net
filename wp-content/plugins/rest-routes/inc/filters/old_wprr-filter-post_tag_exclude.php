<?php

add_filter( 'wprr_filter_query', 'route_filter_tag_exclude', 10, 2 );

function route_filter_tag_exclude( $args, $post_id ){

	$tag = unserialize( get_post_meta( $post_id, '_wprr_tag_exclude', true ) );

	if( isset( $tag ) && ( $tag != '' ) && ( $tag ) ){

			$args['tag__not_in'] = $tag;

	}

	return $args;
}

add_filter( 'wprr_add_filter_elements', 'route_add_filter_element_tag_exclude', 10, 2);

function route_add_filter_element_tag_exclude($output, $post_id){

	$tag = unserialize( get_post_meta( $post_id, '_wprr_tag_exclude', true ) );

	$output .= '<table class="form-table">
				    <tbody>
				        <tr>
						    <th scope="row">Exclude Tag</th>
						    <td>
						        <fieldset>';

					            	$output .= '
					            		<label for="wprr_category">
							                <input type="text" value="'.implode(", ", $tag).'" id="_wprr_tag_exclude" name="wprr_tag_exclude">
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

add_action( 'wprr_save_fields', 'route_save_field_tag_exclude', 10, 2 );

function route_save_field_tag_exclude( $fields, $post_id ){

	$tag = serialize( explode( ',', $fields['wprr_tag_exclude'] ) );
	update_post_meta( $post_id, '_wprr_tag_exclude', $tag );

}

?>