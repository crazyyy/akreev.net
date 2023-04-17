<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\RestApiCall;

use GuzzleHttp\Client;
use RestRoutes\Helpers\EndpointFinder;
use RestRoutes\Helpers\FieldValueParser;
use RestRoutes\Helpers\OutputSorter;
use Throwable;
use WP_REST_Request;

class Callback
{
    private $endpointFinder;

    public function __construct(EndpointFinder $endpointFinder)
    {
        $this->endpointFinder = $endpointFinder;
    }

    public function getCallback(WP_REST_Request $data): void
    {
        $endpoint = $this->endpointFinder->getByMethod($data->get_route(), $data->get_method());

        if (! $endpoint) {
            wp_send_json_error(['error' => 'Endpoint could not be found']);
        }

        do_action('rest_routes_before_call_res_api_call_callback', $data, $endpoint);

        $client = new Client();

        foreach ($endpoint->getRestApiCall() as $restApiCall) {
            $method = FieldValueParser::getFieldValue(
                FieldValueParser::getFieldsByName($restApiCall['basic'], 'method') ?? [],
                'value'
            );

            $url = FieldValueParser::getFieldValue(
                FieldValueParser::getFieldsByName($restApiCall['basic'], 'url') ?? [],
                'value'
            );

            $headers = [];

            foreach ($restApiCall['headers'] ?? [] as $header) {
                $headers[FieldValueParser::getFieldValue(
                    $header['fields'],
                    'requestHeader'
                )] = FieldValueParser::getValue($data, $header);
            }

            $extraOptions = ['headers' => $headers];

            $username = FieldValueParser::getFieldValue(
                FieldValueParser::getFieldsByName($restApiCall['basic'], 'basic_auth') ?? [],
                'user'
            );

            $pass = FieldValueParser::getFieldValue(
                FieldValueParser::getFieldsByName($restApiCall['basic'], 'basic_auth') ?? [],
                'password'
            );

            if ($username && $pass) {
                $extraOptions['auth'] = [$username, $pass];
            }

	        $requestParameters = $restApiCall['requestParameters'] ?? [];
            $requestBodyContent = $restApiCall['requestBody'] ?? [];

            foreach($requestParameters as $requestParameter){
	            $extraOptions['query'][FieldValueParser::getFieldValue($requestParameter['fields'], 'parameterName')] =
		            FieldValueParser::getValue($data, $requestParameter);
            }

	        foreach($requestBodyContent as $requestBody){
		        $extraOptions['body'] = FieldValueParser::getFieldValue($requestBody['fields'], 'value');
	        }

            try {
	            $response = $client->request(
		            $method,
		            $url,
		            $extraOptions
	            );
            } catch ( Throwable $exception) {
            	$response = $exception->getMessage();
            }
        }

        if (!isset($restApiCall)) {
        	return;
        }

        do_action('rest_routes_after_call_rest_api_call_callback', $data, $endpoint);

        $result = [];

        $outputFields = OutputSorter::sort($restApiCall['output']);

        foreach($outputFields as $outputField) {
        	$type = $outputField['name'] ?? '';

        	if ($type === 'request_response') {

        		if (is_string($response)) {
			        $result = array_merge($result, [$response]);
		        } else {
			        $result = array_merge($result, json_decode($response->getBody()->getContents()));
		        }

        		continue;
	        }

        	if ($type === 'normal_field') {
		        $result[FieldValueParser::getFieldValue($outputField['fields'], 'fieldName')]
			        = FieldValueParser::getFieldValue($outputField['fields'], 'fieldValue');
	        }


        }

        wp_send_json_success(apply_filters('rest_routes_call_rest_api_call_result', $result, $endpoint, $data));
    }
}
