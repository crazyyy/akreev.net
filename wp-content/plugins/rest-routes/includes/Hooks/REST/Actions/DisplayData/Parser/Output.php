<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions\DisplayData\Parser;

use RestRoutes\Helpers\FieldValueParser;
use RestRoutes\Helpers\OutputSorter;
use RestRoutes\Helpers\ParameterConditionalChecker;
use WP_Post;
use WP_REST_Request;
use WP_Term;

use function explode;
use function in_array;
use function str_replace;
use function strpos;

class Output
{
    public function build(
        array $endpoint,
        array $results,
        WP_REST_Request $request
    ) {
        if (!$endpoint['output']) {
            return $results;
        }

        $response = [];

        foreach ($results as $post) {
            $outputFields = $endpoint['output'];
            $outputFields = OutputSorter::sort($outputFields);

            $response[] = $this->buildOutputFields(
                $outputFields,
                $post,
                $request
            );
        }

        return $response;
    }

    private function buildOutputFields(
        array $output,
        WP_Post $post,
        WP_REST_Request $request
    ) {
        $response     = [];
        $originalPost = $post;

        foreach ($output as $outputField) {
            if (
                !(new ParameterConditionalChecker())->conditionalMatched(
                    $outputField,
                    $request
                )
            ) {
                continue;
            }

            $prefix = '';

            if (
                isset($outputField['name'])
                && strpos(
                    $outputField['name'],
                    'parent'
                ) === 0
            ) {
                $prefix     = apply_filters(
                    'rest_routes_output_parent_field_prefix',
                    'parent_',
                    $outputField,
                    $post
                );
                $postParent = get_post($post->post_parent);

                if (!$postParent) {
                    continue;
                }

                $post = $postParent;

                $outputField['name'] = str_replace(
                    'parent_',
                    '',
                    $outputField['name']
                );
            }

            $this->buildPostFormat($response, $outputField, $post, $prefix);
            $this->buildPostFields($response, $outputField, $post, $prefix);
            $this->buildCustomFields(
                $response,
                $outputField,
                $post->ID,
                $prefix
            );
            $this->buildTaxonomies($response, $outputField, $post->ID, $prefix);
            $this->buildFeaturedImage(
                $response,
                $outputField,
                $post->ID,
                $prefix
            );
            $this->buildAttachments(
                $response,
                $outputField,
                $post->ID,
                $prefix
            );
            $this->buildPostPermalink($response, $outputField, $post, $prefix);

            $post = $originalPost;
        }

        return $response;
    }

    private function buildPostFormat(
        array &$response,
        array $outputField,
        WP_Post $post,
        string $prefix
    ) {
        if ($outputField['name'] !== 'post_format') {
            return $response;
        }

        $post_format = get_post_format($post->ID);

        if (!$post_format) {
            return $response;
        }

        $response[$prefix . $outputField['name']] = $post_format;

        return $response;
    }

    private function buildPostFields(
        array &$response,
        array $outputField,
        WP_Post $post,
        string $prefix
    ) {
        if (!isset($post->{$outputField['name']})) {
            return $response;
        }

        $response[$prefix . $outputField['name']]
            = $post->{$outputField['name']};

        return $response;
    }

    private function buildCustomFields(
        array &$response,
        array $outputField,
        $post_id,
        string $prefix
    ) {
        if (
            !in_array(
                $outputField['name'],
                ['custom-field', 'custom-field-toolset']
            )
        ) {
            return $response;
        }

        $customFieldVal = get_post_meta(
            $post_id,
            $outputField['fields'][0]['value']
        );

        $customFieldVal = apply_filters(
            'rest_routes_output_custom_field',
            $customFieldVal,
            $outputField,
            $post_id
        );

        if ($customFieldVal) {
            $customFieldNameDisplay = FieldValueParser::getFieldValue(
                $outputField['fields'],
                'customFieldNameDisplay'
            ) ?: FieldValueParser::getFieldValue(
                $outputField['fields'],
                'customFieldName'
            );

            $response[$prefix . $customFieldNameDisplay]
                = $customFieldVal;
        }

        return $response;
    }

    private function buildTaxonomies(
        array &$response,
        array $outputField,
        $post_id,
        string $prefix
    ) {
        if ($outputField['name'] !== 'taxonomy') {
            return $response;
        }

        $terms = wp_get_post_terms(
            $post_id,
            FieldValueParser::getFieldValue($outputField['fields'], 'taxonomy')
        );

        if (!$terms) {
            return $response;
        }

        foreach ($terms as $term) {
            $termsOutput = [];
            $this->buildTermFields(
                $termsOutput,
                FieldValueParser::getFieldValue(
                    $outputField['fields'],
                    'field-type'
                ) ?: ['name', 'term_id', 'slug'],
                $term
            );
            $this->buildTermCustomFields($outputField, $term);
            $response[$prefix . FieldValueParser::getFieldValue(
                $outputField['fields'],
                'taxonomy'
            )][]
                = $termsOutput;
        }

        return $response;
    }

    private function buildTermFields(
        array &$termsOutput,
        array $fields,
        WP_Term $term
    ): void {
        foreach ($fields as $field) {
            $termsOutput[$field] = $term->{$field};
        }
    }

    private function buildTermCustomFields(array &$outputField, WP_Term $term): void
    {
        if (
            !FieldValueParser::getFieldValue(
                $outputField['fields'],
                'termFields'
            )
        ) {
            return;
        }

        $termFields = explode(
            ',',
            str_replace(
                ' ',
                '',
                FieldValueParser::getFieldValue(
                    $outputField['fields'],
                    'termFields'
                )
            )
        );
        foreach ($termFields as $termField) {
            $termFieldVal = get_term_meta($term->term_id, $termField);

            if (!$termFieldVal) {
                continue;
            }

            $termsOutput[$termField] = $termFieldVal;
        }
    }

    private function buildFeaturedImage(
        array &$response,
        array $outputField,
        $post_id,
        string $prefix
    ) {
        if ($outputField['name'] !== 'featured_image') {
            return $response;
        }

        $response[$prefix . 'featured_image'] = get_the_post_thumbnail_url(
            $post_id
        );

        return $response;
    }

    private function buildAttachments(
        array &$response,
        array $outputField,
        $post_id,
        string $prefix
    ) {
        if (
            !in_array(
                $outputField['name'],
                [
                'attached_images',
                'attached_audios',
                'attached_videos',
                ]
            )
        ) {
            return $response;
        }

        $this->buildMedia(
            'image',
            'attached_images',
            $post_id,
            $response,
            $prefix
        );
        $this->buildMedia(
            'audio',
            'attached_audios',
            $post_id,
            $response,
            $prefix
        );
        $this->buildMedia(
            'video',
            'attached_videos',
            $post_id,
            $response,
            $prefix
        );

        return $response;
    }

    private function buildMedia(
        $type,
        $property_name,
        $post_id,
        array &$response,
        string $prefix
    ) {
        $attachments = get_attached_media($type, $post_id);

        if ($attachments) {
            $response[$prefix . $property_name] = [];
            foreach ($attachments as $attachment) {
                $response[$prefix . $property_name][] = $attachment->guid;
            }
        }

        return $response;
    }

    private function buildPostPermalink(
        array &$response,
        array $outputField,
        WP_Post $post,
        string $prefix
    ) {
        if ($outputField['name'] !== 'permalink') {
            return $response;
        }

        $permalink = get_permalink($post->ID);

        if (!$permalink) {
            return $response;
        }

        $response[$prefix . $outputField['name']] = $permalink;

        return $response;
    }
}
