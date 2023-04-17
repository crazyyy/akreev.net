<?php

/**
 * Plugin Name: REST API Helper 
 * Plugin URI: http://ihsana.net/
 * Description: This plugin help REST API for display featured media source, author, categories, and custom fields. This plugin is made for Mobile Apps.  
 * Version: 2.2.8
 * Author: JasmanXcrew 
 * Author URI: http://ihsana.net/
 * 
 * This plugin help REST API for display featured media source, author, categories, and custom fields. 
 * This plugin is made for IMA Builder, but it can work for others as well. 
 * 
 **/

# Exit if accessed directly
if (!defined("ABSPATH"))
{
    exit;
}


# Constant

/**
 * Plugin Version
 **/
define("IMH_VERSION", "2.2.8");

/**
 * Exec Mode
 **/
define("IMH_EXEC", true);

/**
 * Enable Public Data Woo API
 * @default false
 **/


if (!defined("IMH_WOO"))
{
    define("IMH_WOO", false);
}

/**
 * Enable Basic Auth
 * @default false
 **/
if (!defined("IMH_RESTAPI_BASIC_AUTH"))
{
    define("IMH_RESTAPI_BASIC_AUTH", false);
}

/**
 * Enable Basic Auth
 * @default false
 **/
if (!defined("IMH_ALLOW_PREFLIGHT_CORS"))
{
    define("IMH_ALLOW_PREFLIGHT_CORS", false);
}

/**
 * Enable Register Settings
 **/
if (!defined("IMH_RESTAPI_REGISTER"))
{
    define("IMH_RESTAPI_REGISTER", false);
}

/**
 * Custom Field Name for Gallery
 * @default _product_image_gallery
 **/

if (!defined("IMH_WOO_ACF_GALLERY"))
{
    define("IMH_WOO_ACF_GALLERY", '_product_image_gallery');
}

/**
 * Custom Field type data object
 * @default true|false = false for string and true for array|object
 **/

if (!defined("IMH_WOO_ACF_GALLERY_OBJECT"))
{
    define("IMH_WOO_ACF_GALLERY_OBJECT", false);
}

/**
 * OneSignal Settings
 **/

if (!defined("IMH_ONESIGNAL_PUSH"))
{
    define("IMH_ONESIGNAL_PUSH", false);
}

if (!defined("IMH_ONESIGNAL_PAGE_IN_APP"))
{
    define("IMH_ONESIGNAL_PAGE_IN_APP", 'post_singles');
}

if (!defined("IMH_ONESIGNAL_APP_ID"))
{
    define("IMH_ONESIGNAL_APP_ID", '31ee45e2-c63d-4048-903a-89ca43f3afa2');
}

if (!defined("IMH_ONESIGNAL_APP_KEY"))
{
    define("IMH_ONESIGNAL_APP_KEY", 'YzUzNmZkOTAtMmVlMC00OWIzLThlNGQtMzQyYzzyNmFhZjcw');
}

if (!defined("IMH_ANONYMOUS_COMMENTS"))
{
    define("IMH_ANONYMOUS_COMMENTS", false);
}

/**
 * Visual Composer Settings
 **/
if (!defined("IMH_VC_SHORTCODE"))
{
    define("IMH_VC_SHORTCODE", false);
}


/**
 * Plugin Base File
 **/
define("IMH_PATH", dirname(__file__));

/**
 * Plugin Base Directory
 **/
define("IMH_DIR", basename(IMH_PATH));

/**
 * Plugin Base URL
 **/
define("IMH_URL", plugins_url("/", __file__));


/**
 * Debug Mode
 **/
define("IMH_DEBUG", false); //change false for distribution


/**
 * Base Class Plugin
 * @author JasmanXcrew
 *
 * @access public
 * @package REST API Helper
 *
 **/

class IMHrestApiHelper
{
    var $error_notice = null;
    var $append_galleries = true;
    var $post_types = array("page", "post");
    var $backlist_metatags = array(
        "_edit_lock",
        "_edit_last",
        "_wp_page_template",
        "_wp_old_slug",
        "post_password",
        "_wpb_vc_js_status",
        "_vc_post_settings");

    /**
     * Option Plugin
     * @access private
     **/
    private $options;

    /**
     * Instance of a class
     * @access public
     * @return void
     **/

    function __construct()
    {

        global $wp_post_types;

        //id=-1
        if (isset($_GET['categories']))
        {
            if ($_GET['categories'] == '-1')
            {
                unset($_GET['categories']);
            }
        }

        $this->options = get_option("rest_api_helper_plugins"); // get current option

        add_action('init', array($this, 'imh_init'));

        if (preg_match("/json|api/", $_SERVER["REQUEST_URI"]))
        {
            add_action('rest_api_init', array($this, 'imh_rest_api_init'));
        }

        add_action("plugins_loaded", array($this, "imh_textdomain")); //load language/textdomain
        add_action('shutdown', array($this, 'imh_post_type'));
        add_action('init', array($this, 'imh_handle_http_json'));

        $post_types = json_decode(get_option("imh_post_type"), true);
        if (!is_array($post_types))
        {
            $post_types = array("post", "page");
        }

        foreach ($post_types as $post_type)
        {
            if (!has_action("rest_prepare_$post_type"))
            {
                add_action("rest_prepare_$post_type", array($this, "imh_rest_prepare_post"), 10, 3);
            }
        }

        if (is_admin())
        {
            add_action("admin_menu", array($this, "imh_admin_menu_option_page")); // add option page
            add_action("admin_init", array($this, "imh_admin_menu_option_init"));
            if (IMH_ONESIGNAL_PUSH == true)
            {
                add_action("admin_menu", array($this, "imh_admin_menu_onesignal_sender")); //create page admin
            }
        }

        if (IMH_WOO == true)
        {
            add_action("rest_api_init", array($this, "imh_register_rest_route_woocommerce"));
        }

        if (IMH_ONESIGNAL_PUSH == true)
        {
            if (is_admin())
            {
                add_action("add_meta_boxes", array($this, "imh_metabox_onesignal"));
                add_action("save_post", array($this, "imh_metabox_onesignal_save"));
            }
        }

        add_action('admin_notices', array($this, 'imh_error_notice'));
        add_action('admin_notices', array($this, 'imh_update_notice'));


        // basic auth
        if (IMH_RESTAPI_BASIC_AUTH == true)
        {
            add_filter('determine_current_user', array($this, 'imh_basic_auth_handler'), 20);
            add_filter('rest_authentication_errors', array($this, 'imh_basic_auth_error'));
        }

        if (IMH_ALLOW_PREFLIGHT_CORS == true)
        {
            add_action('rest_api_init', array($this, 'imh_preflight_cors'), 15);
        }

        if (IMH_ANONYMOUS_COMMENTS == true)
        {
            add_filter('rest_allow_anonymous_comments', array($this, 'imh_allow_anonymous_comments'));
        }

        if (IMH_RESTAPI_REGISTER == true)
        {
            add_action('rest_api_init', array($this, 'imh_rest_user_endpoints'));
            add_action('show_user_profile', array($this, 'imh_usermeta_form_fields'));
            add_action('edit_user_profile', array($this, 'imh_usermeta_form_fields'));
            add_action('personal_options_update', array($this, 'imh_usermeta_form_fields_update'));
            add_action('edit_user_profile_update', array($this, 'imh_usermeta_form_fields_update'));
        }


    }


    /**
     * IMHrestApiHelper::imh_usermeta_form_fields()
     * 
     * @param mixed $user
     * @return void
     */
    function imh_usermeta_form_fields($user)
    {
        $html = null;
        $html .= '<table class="form-table">';

        $html .= '<tr>';
        $html .= '<th>';
        $html .= '<label for="phone">' . __("Phone", 'rest-api-helper') . '</label>';
        $html .= '</th>';
        $html .= '<td>';
        $html .= '<input class="regular-text ltr" id="phone" name="phone" type="text"  value="' . esc_attr(get_user_meta($user->ID, 'phone', true)) . '" />';
        $html .= '<p class="description">' . __("Please enter your phone", 'rest-api-helper') . '</p>';
        $html .= '</td>';
        $html .= '</tr>';

        $html .= '<tr>';
        $html .= '<th>';
        $html .= '<label for="birthday">' . __("Birthday", 'rest-api-helper') . '</label>';
        $html .= '</th>';
        $html .= '<td>';
        $html .= '<input class="regular-text ltr" id="birthday" pattern="(19[0-9][0-9]|20[0-9][0-9])-(1[0-2]|0[1-9])-(3[01]|[21][0-9]|0[1-9])" title="' . __("Please use YYYY-MM-DD as the date format", 'rest-api-helper') . '" name="birthday" type="date"  value="' . esc_attr(get_user_meta($user->ID, 'birthday', true)) . '" />';
        $html .= '<p class="description">' . __("Please enter your birthday date", 'rest-api-helper') . '</p>';
        $html .= '</td>';
        $html .= '</tr>';


        $html .= '<tr>';
        $html .= '<th>';
        $html .= '<label for="company">' . __("Company", 'rest-api-helper') . '</label>';
        $html .= '</th>';
        $html .= '<td>';
        $html .= '<input class="regular-text ltr" placeholder="Ihsana IT Solution" id="company" name="company" type="text"  value="' . esc_attr(get_user_meta($user->ID, 'company', true)) . '" />';
        $html .= '<p class="description">' . __("Please enter your company name", 'rest-api-helper') . '</p>';
        $html .= '</td>';
        $html .= '</tr>';

        $html .= '<tr>';
        $html .= '<th>';
        $html .= '<label for="address_1">' . __("Address 1", 'rest-api-helper') . '</label>';
        $html .= '</th>';
        $html .= '<td>';
        $html .= '<input class="regular-text ltr" placeholder="Silambau" id="address_1" name="address_1" type="text"  value="' . esc_attr(get_user_meta($user->ID, 'address_1', true)) . '" />';
        $html .= '<p class="description">' . __("Please enter your address 1", 'rest-api-helper') . '</p>';
        $html .= '</td>';
        $html .= '</tr>';

        $html .= '<tr>';
        $html .= '<th>';
        $html .= '<label for="address_2">' . __("Address 2", 'rest-api-helper') . '</label>';
        $html .= '</th>';
        $html .= '<td>';
        $html .= '<input class="regular-text ltr" placeholder="Kinali" id="address_2" name="address_2" type="text"  value="' . esc_attr(get_user_meta($user->ID, 'address_2', true)) . '" />';
        $html .= '<p class="description">' . __("Please enter your address 2", 'rest-api-helper') . '</p>';
        $html .= '</td>';
        $html .= '</tr>';

        $html .= '<tr>';
        $html .= '<th>';
        $html .= '<label for="city">' . __("City", 'rest-api-helper') . '</label>';
        $html .= '</th>';
        $html .= '<td>';
        $html .= '<input class="regular-text ltr" placeholder="Pasaman Barat" id="city" name="city" type="text"  value="' . esc_attr(get_user_meta($user->ID, 'city', true)) . '" />';
        $html .= '<p class="description">' . __("Please enter your city name", 'rest-api-helper') . '</p>';
        $html .= '</td>';
        $html .= '</tr>';


        $html .= '<tr>';
        $html .= '<th>';
        $html .= '<label for="state">' . __("State", 'rest-api-helper') . '</label>';
        $html .= '</th>';
        $html .= '<td>';
        $html .= '<input class="regular-text ltr" placeholder="Sumatera Barat" id="state" name="state" type="text"  value="' . esc_attr(get_user_meta($user->ID, 'state', true)) . '" />';
        $html .= '<p class="description">' . __("Please enter your state", 'rest-api-helper') . '</p>';
        $html .= '</td>';
        $html .= '</tr>';

        $html .= '<tr>';
        $html .= '<th>';
        $html .= '<label for="postcode">' . __("Postcode", 'rest-api-helper') . '</label>';
        $html .= '</th>';
        $html .= '<td>';
        $html .= '<input class="regular-text ltr" placeholder="26567" id="postcode" name="postcode" type="text"  value="' . esc_attr(get_user_meta($user->ID, 'postcode', true)) . '" />';
        $html .= '<p class="description">' . __("Please enter your postcode", 'rest-api-helper') . '</p>';
        $html .= '</td>';
        $html .= '</tr>';

        $html .= '<tr>';
        $html .= '<th>';
        $html .= '<label for="country">' . __("Country", 'rest-api-helper') . '</label>';
        $html .= '</th>';
        $html .= '<td>';
        $html .= '<input class="regular-text ltr" placeholder="Indonesia" id="country" name="country" type="text"  value="' . esc_attr(get_user_meta($user->ID, 'country', true)) . '" />';
        $html .= '<p class="description">' . __("Please enter your country", 'rest-api-helper') . '</p>';
        $html .= '</td>';
        $html .= '</tr>';


        $html .= '<tr>';
        $html .= '<th>';
        $html .= '<label for="birthday">' . __("Expired Date", 'rest-api-helper') . '</label>';
        $html .= '</th>';
        $html .= '<td>';
        $html .= '<input class="regular-text ltr" id="expired" pattern="(19[0-9][0-9]|20[0-9][0-9])-(1[0-2]|0[1-9])-(3[01]|[21][0-9]|0[1-9])" title="' . __("Please use YYYY-MM-DD as the date format", 'rest-api-helper') . '" name="expired" type="date"  value="' . esc_attr(get_user_meta($user->ID, 'expired', true)) . '" />';
        $html .= '<p class="description">' . __("Please enter your expired date", 'rest-api-helper') . '</p>';
        $html .= '</td>';
        $html .= '</tr>';

        $html .= '</table>';
        echo $html;
    }


    /**
     * IMHrestApiHelper::imh_usermeta_form_fields_update()
     * 
     * @param mixed $user_id
     * @return
     */
    function imh_usermeta_form_fields_update($user_id)
    {
        if (!current_user_can('edit_user', $user_id))
        {
            return false;
        }

        $birthday = update_user_meta($user_id, 'birthday', sanitize_text_field($_POST['birthday']));
        $company = update_user_meta($user_id, 'company', sanitize_text_field($_POST['company']));
        $address_1 = update_user_meta($user_id, 'address_1', sanitize_text_field($_POST['address_1']));
        $address_2 = update_user_meta($user_id, 'address_2', sanitize_text_field($_POST['address_2']));
        $city = update_user_meta($user_id, 'city', sanitize_text_field($_POST['city']));
        $state = update_user_meta($user_id, 'state', sanitize_text_field($_POST['state']));
        $postcode = update_user_meta($user_id, 'postcode', sanitize_text_field($_POST['postcode']));
        $country = update_user_meta($user_id, 'country', sanitize_text_field($_POST['country']));
        $phone = update_user_meta($user_id, 'phone', sanitize_text_field($_POST['phone']));
        $expired = update_user_meta($user_id, 'expired', sanitize_text_field($_POST['expired']));

        if ($birthday && $company && $address_1 && $address_2 && $city && $state && $postcode && $country && $phone && $expired)
        {
            return true;
        }
    }


    /**
     * IMHrestApiHelper::imh_rest_user_endpoints($request)
     * 
     * @return void
     */
    function imh_rest_user_endpoints($request)
    {
        register_rest_route('wp/v2', 'users/register', array(
            'methods' => 'POST',
            'callback' => array($this, 'imh_rest_user_endpoint_handler'),
            ));
    }


    function imh_rest_user_endpoint_handler($request = null)
    {
        $response = array();
        $parameters = $request->get_json_params();
        $username = sanitize_text_field($parameters['username']);
        $email = sanitize_text_field($parameters['email']);
        $password = sanitize_text_field($parameters['password']);
        // $role = sanitize_text_field($parameters['role']);
        $error = new WP_Error();
        if (empty($username))
        {
            $error->add(400, __("Username field 'username' is required.", 'wp-rest-user'), array('status' => 400));
            return $error;
        }
        if (empty($email))
        {
            $error->add(401, __("Email field 'email' is required.", 'wp-rest-user'), array('status' => 400));
            return $error;
        }
        if (empty($password))
        {
            $error->add(404, __("Password field 'password' is required.", 'wp-rest-user'), array('status' => 400));
            return $error;
        }
        $user_id = username_exists($username);
        if (!$user_id && email_exists($email) == false)
        {
            $user_id = wp_create_user($username, $password, $email);
            if (!is_wp_error($user_id))
            {
                // Ger User Meta Data (Sensitive, Password included. DO NOT pass to front end.)
                $user = get_user_by('id', $user_id);

                $user_data['ID'] = $user_id;
                $user_data['first_name'] = sanitize_text_field($parameters['first_name']);
                $user_data['last_name'] = sanitize_text_field($parameters['last_name']);
                $user_data['user_url'] = sanitize_text_field($parameters['url']);

                $birthday = explode('T', sanitize_text_field($parameters['birthday']));

                update_user_meta($user_id, 'birthday', $birthday[0]);
                update_user_meta($user_id, 'company', sanitize_text_field($parameters['company']));
                update_user_meta($user_id, 'address_1', sanitize_text_field($parameters['address_1']));
                update_user_meta($user_id, 'address_2', sanitize_text_field($parameters['address_2']));
                update_user_meta($user_id, 'city', sanitize_text_field($parameters['city']));
                update_user_meta($user_id, 'state', sanitize_text_field($parameters['state']));
                update_user_meta($user_id, 'postcode', sanitize_text_field($parameters['postcode']));
                update_user_meta($user_id, 'country', sanitize_text_field($parameters['country']));
                update_user_meta($user_id, 'phone', sanitize_text_field($parameters['phone']));
                update_user_meta($user_id, 'expired', sanitize_text_field($parameters['expired']));


                wp_update_user($user_data);


                // $user->set_role($role);
                $user->set_role('subscriber');
                // WooCommerce specific code
                if (class_exists('WooCommerce'))
                {
                    $user->set_role('customer');
                }
                // Ger User Data (Non-Sensitive, Pass to front end.)
                $response['code'] = 200;
                $response['title'] = __("Successfully!", "rest-api-helper");
                $response['message'] = __("User '" . $username . "' Registration was Successful", "rest-api-helper");
            } else
            {
                return $user_id;
            }
        } else
        {
            $error->add(406, __("Email already exists, please try 'Reset Password'", 'rest-api-helper'), array('status' => 400));
            return $error;
        }
        return new WP_REST_Response($response, 123);
    }

    /**
     * IMHrestApiHelper::imh_allow_anonymous_comments()
     * 
     * @return
     */
    function imh_allow_anonymous_comments()
    {
        return true;
    }


    /**
     * IMHrestApiHelper::imh_admin_menu_onesignal_sender()
     * 
     * @return void
     */
    public function imh_admin_menu_onesignal_sender()
    {
        add_menu_page(__("OneSignal Sender", "rest-api-helper"), //page title
            __("OneSignal Sender", "rest-api-helper"), //anchor link
            "read", "onesignal_sender", array($this, "imh_admin_menu_onesignal_sender_markup"), "dashicons-testimonial", 70);
    }

    /**
     * Create markup for top level admin menu
     * 
     * @access public
     * @return void
     **/
    public function imh_admin_menu_onesignal_sender_markup()
    {

        _e("<div class='wrap'>");
        _e("<h1>" . __("OneSignal Sender", "rest-api-helper") . "</h1>");
        _e("<div class='postbox'>");
        _e("<div class='inside'>");

        if (isset($_POST['imh_onesignal_message']))
        {
            if (strlen($_POST['imh_onesignal_message']) >= 3)
            {

                $imh_onesignal_message = sanitize_text_field($_POST["imh_onesignal_message"]);
                $imh_onesignal_page = sanitize_text_field($_POST["imh_onesignal_page"]);

                $content = array("en" => $imh_onesignal_message);

                $url = 'https://onesignal.com/api/v1/notifications';
                $args = array(
                    'headers' => array(
                        'Content-Type' => 'application/json',
                        'Authorization' => 'Basic ' . IMH_ONESIGNAL_APP_KEY,
                        'X-App' => 'IMA BuildeRz'),
                    'body' => json_encode(array(
                        'app_id' => IMH_ONESIGNAL_APP_ID,
                        'included_segments' => array('All'),
                        'data' => array("page" => $imh_onesignal_page),
                        'contents' => $content)),
                    'method' => 'POST',
                    'timeout' => 45,
                    'redirection' => 5,
                    'httpversion' => '1.0',
                    'blocking' => true,
                    );
                $response = wp_remote_post($url, $args);

                if (is_wp_error($response))
                {
                    $error_message = $response->get_error_message();
                } else
                {
                    $info = json_decode($response['body'], true);
                    if (isset($info['errors'][0]))
                    {
                        update_option("imh_error_notice", array('errors' => $info['errors'][0]));
                    } else
                    {
                        update_option("imh_update_notice", array('updates' => "Push notification ID #" . $info["id"] . " with " . $info["recipients"] . ' recipients'));
                    }
                }
            } else
            {
                update_option("imh_error_notice", array('errors' => 'message can not be empty'));
            }
            wp_redirect('./admin.php?page=onesignal_sender');
            exit;
        }
        _e("<form method='post' action=''>");

        _e("<table class=\"form-table\">");
        _e("<tbody>");
        _e("<tr>");
        _e("<th scope=\"row\">" . __("Your Message", "rest-api-helper") . "</th>");
        _e("<td>");
        _e("<textarea name=\"imh_onesignal_message\" class=\"imh-form-control large-text\"></textarea>");
        _e("</td>");
        _e("</tr>");

        _e("<tr>");
        _e("<th scope=\"row\">" . __("Page", "rest-api-helper") . "</th>");
        _e("<td>");
        _e("<input name=\"imh_onesignal_page\" type=\"text\" class=\"imh-form-control regular-text\" />");
        _e("</td>");
        _e("</tr>");

        _e("<tr>");
        _e("<th scope=\"row\"></th>");
        _e("<td><input type=\"submit\" class=\"button button-primary\" value=\"" . __("Send Notification", "rest-api-helper") . "\" /></td>");
        _e("</tr>");

        _e("</tbody>");
        _e("</table>");

        _e("</form>");
        _e("</div>");
        _e("</div>");
        _e("</div>");
    }

    /**
     * IMHrestApiHelper::imh_preflight_cors()
     * 
     * @return void
     */
    function imh_preflight_cors()
    {
        if (preg_match("/json|api/", $_SERVER["REQUEST_URI"]))
        {
            remove_filter('rest_pre_serve_request', array($this, 'rest_send_cors_headers'));
            add_filter('rest_pre_serve_request', array($this, 'imh_pre_serve_request'));
        }
    }

    /**
     * IMHrestApiHelper::imh_pre_serve_request()
     * 
     * @param mixed $value
     * @return
     */
    function imh_pre_serve_request($value)
    {
        if (isset($_SERVER['HTTP_ORIGIN']))
        {
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400'); // cache for 1 day
        }

        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
        {
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            {
                header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
            }

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            {
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
            }
        }
        header("X-Powered-By: Ionic Mobile App Builder");
        return $value;
    }


    /**
     * IMHrestApiHelper::imh_basic_auth_handler()
     * 
     * @param mixed $user
     * @return
     */
    function imh_basic_auth_handler($user)
    {

        if (isset($_SERVER["HTTP_X_AUTHORIZATION"]))
        {
            list($_SERVER["PHP_AUTH_USER"], $_SERVER["PHP_AUTH_PW"]) = explode(":", base64_decode(substr($_SERVER["HTTP_X_AUTHORIZATION"], 6)));
        }

        global $wp_json_basic_auth_error;
        $wp_json_basic_auth_error = null;

        if (!empty($user))
        {
            return $user;
        }

        if (!isset($_SERVER['PHP_AUTH_USER']))
        {
            return $user;
        }

        if (strlen($_SERVER['PHP_AUTH_USER']) < 2)
        {
            return $user;
        }

        $username = $_SERVER['PHP_AUTH_USER'];
        $password = $_SERVER['PHP_AUTH_PW'];

        remove_filter('determine_current_user', array($this, 'imh_basic_auth_handler'), 20);
        $user = wp_authenticate($username, $password);
        add_filter('determine_current_user', array($this, 'imh_basic_auth_handler'), 20);
        if (is_wp_error($user))
        {
            $wp_json_basic_auth_error = $user;
            return null;
        }
        $wp_json_basic_auth_error = true;
        return $user->ID;
    }

    /**
     * IMHrestApiHelper::imh_basic_auth_error()
     * 
     * @return
     */
    function imh_basic_auth_error()
    {
        if (!empty($error))
        {
            return $error;
        }
        global $wp_json_basic_auth_error;
        return $wp_json_basic_auth_error;
    }
    /**
     * IMHrestApiHelper::imh_metabox_onesignal()
     * 
     * @return void
     */
    public function imh_metabox_onesignal($hook)
    {
        $allowed_hook = array("post");
        if (in_array($hook, $allowed_hook))
        {
            add_meta_box("imh_metabox_onesignal", __("OneSignal Sender", "rest-api-helper"), array($this, "imh_metabox_onesignal_callback"), $hook, "normal", "high");
        }
    }

    /**
     * IMHrestApiHelper::imh_metabox_onesignal_callback()
     * 
     * @return void
     */
    public function imh_metabox_onesignal_callback($post)
    {
        wp_nonce_field("imh_metabox_onesignal_save", "imh_metabox_onesignal_nonce");
        $current_onesignal_message = get_post_meta($post->ID, "_imh_postmeta_onesignal_message", true);
        if ($current_onesignal_message == '')
        {
            $current_onesignal_message = $post->post_title;
        }

        printf("<table class=\"form-table\">");
        printf("<tr>");
        printf("<th style=\"display: block;padding: 0px;\" scope=\"row\"><label for=\"onesignal-message\">" . __("Your Message", "rest-api-helper") . "</label></th>");
        printf("<td style=\"display: block;padding: 0px;\">");
        printf('<textarea style="width:100%%" name="imh_onesignal_message" id="imh_onesignal_message">' . esc_attr($current_onesignal_message) . '</textarea>');
        printf("</td>");
        printf("</tr>");
        printf("</table>");
        printf('<input name="imh-push-submit" class="button button-primary button-large" id="imh-push-submit" value="' . __("Send Notification", "rest-api-helper") . '" type="submit">');
    }

    /**
     * IMHrestApiHelper::imh_metabox_onesignal_save()
     * 
     * @param mixed $post_id
     * @return void
     */
    public function imh_metabox_onesignal_save($post_id)
    {

        // Check if our nonce is set.
        if (!isset($_POST["imh_metabox_onesignal_nonce"]))
            return $post_id;
        $nonce = $_POST["imh_metabox_onesignal_nonce"];

        // Verify that the nonce is valid.
        if (!wp_verify_nonce($nonce, "imh_metabox_onesignal_save"))
            return $post_id;

        // If this is an autosave, our form has not been submitted,
        // so we don't want to do anything.
        if (defined("DOING_AUTOSAVE") && DOING_AUTOSAVE)
            return $post_id;

        // Check the user's permissions.
        if ("page" == $_POST["post_type"])
        {
            if (!current_user_can("edit_page", $post_id))
                return $post_id;
        } else
        {
            if (!current_user_can("edit_post", $post_id))
                return $post_id;
        }

        /* OK, its safe for us to save the data now. */
        $imh_onesignal_message = sanitize_text_field($_POST["imh_onesignal_message"]);

        // Update the meta field.
        update_post_meta($post_id, "_imh_postmeta_onesignal_message", $imh_onesignal_message);


        if (isset($_POST['imh-push-submit']))
        {
            $content = array("en" => $imh_onesignal_message);

            $url = 'https://onesignal.com/api/v1/notifications';
            $args = array(
                'headers' => array(
                    'Content-Type' => 'application/json',
                    'Authorization' => 'Basic ' . IMH_ONESIGNAL_APP_KEY,
                    'X-App' => 'IMA BuildeRz'),
                'body' => json_encode(array(
                    'app_id' => IMH_ONESIGNAL_APP_ID,
                    'included_segments' => array('All'),
                    'data' => array("page" => IMH_ONESIGNAL_PAGE_IN_APP . '/' . $post_id),
                    'contents' => $content)),
                'method' => 'POST',
                'timeout' => 45,
                'redirection' => 5,
                'httpversion' => '1.0',
                'blocking' => true,
                );
            $response = wp_remote_post($url, $args);

            if (is_wp_error($response))
            {
                $error_message = $response->get_error_message();
            } else
            {
                $info = json_decode($response['body'], true);
                if (isset($info['errors'][0]))
                {
                    update_option("imh_error_notice", array('errors' => $info['errors'][0]));
                } else
                {
                    update_option("imh_update_notice", array('updates' => "Push notification ID #" . $info["id"] . " with " . $info["recipients"] . ' recipients'));
                }
            }
        }

    }

    /**
     * IMHrestApiHelper::imh_error_notice()
     * 
     * @return void
     */
    function imh_error_notice()
    {
        $imh_error_notice = get_option("imh_error_notice");
        if (isset($imh_error_notice['errors']))
        {
            if ($imh_error_notice['errors'] != '')
            {
                printf('<div class="error notice"><p><strong>rest-api-helper</strong> : %s</p></div>', $imh_error_notice['errors']);
            }
        }
        update_option("imh_error_notice", array());
    }

    /**
     * IMHrestApiHelper::imh_update_notice()
     * 
     * @return void
     */
    function imh_update_notice()
    {
        $imh_updates_notice = get_option("imh_update_notice");
        if (isset($imh_updates_notice['updates']))
        {
            if ($imh_updates_notice['updates'] != '')
            {
                printf('<div class="updated notice"><p><strong>rest-api-helper</strong> : %s</p></div>', $imh_updates_notice['updates']);
            }
        }
        update_option("imh_update_notice", array());
    }


    /**
     * IMHrestApiHelper::imh_register_rest_route_woocommerce()
     * 
     * @return void
     */
    function imh_register_rest_route_woocommerce()
    {

        register_rest_route("ima_wc/v2", "categories", array(
            "methods" => "GET",
            "callback" => array($this, "rest_route_categories_callback"),
            ));

        register_rest_route("ima_wc/v2", "products", array(
            "methods" => "GET",
            "callback" => array($this, "rest_route_products_callback"),
            "permission_callback" => function (WP_REST_Request $request)
            {
                return true; }
            ));

        register_rest_route("ima_wc/v2", 'products/(?P<id>[0-9]+)', array(
            "methods" => "GET",
            "callback" => array($this, "rest_route_product_callback"),
            "permission_callback" => function (WP_REST_Request $request)
            {
                return true; }
            ));


    }

    /**
     * IMHrestApiHelper::rest_route_categories_callback()
     * 
     * @return
     */
    function rest_route_categories_callback()
    {
        $new_term = array();
        $terms = get_terms('product_cat');
        $z = 0;
        foreach ($terms as $term)
        {
            $new_term[$z]['id'] = $term->term_id;
            $new_term[$z]['name'] = $term->name;
            $new_term[$z]['slug'] = $term->slug;
            $new_term[$z]['count'] = $term->count;
            $new_term[$z]['description'] = $term->description;
            $new_term[$z]['permalink'] = html_entity_decode(get_term_link($term));
            $thumbnail_id = get_woocommerce_term_meta($term->term_id, 'thumbnail_id', true);
            if ($thumbnail_id)
            {
                $image = wp_get_attachment_image_src($thumbnail_id, 'thumbnail');
                $image = $image[0];
            } else
            {
                $image = wc_placeholder_img_src();
            }
            $new_term[$z]['image']['src'] = $image;
            $new_term[$z]['_links']['self'] = get_option('siteurl') . '/wp-json/ima_wc/v2/products/?categories=' . $term->term_id . '&per_pages=100';

            $z++;
        }
        return $new_term;
    }

    /**
     * IMHrestApiHelper::rest_route_product_callback()
     * 
     * @param mixed $request
     * @return
     */
    function rest_route_product_callback($request)
    {


        $product_id = intval(trim($request['id']));
        $product = get_post($product_id);


        $product_detail['id'] = $product->ID;
        $product_detail['name'] = $product->post_title;
        $product_detail['short_description'] = $product->post_excerpt;
        $product_detail['description'] = $product->post_content;
        $product_detail['permalink'] = html_entity_decode($product->guid);
        $product_detail['average_rating'] = get_post_meta($product->ID, '_wc_average_rating', true);

        $product_detail['regular_price'] = get_post_meta($product->ID, '_regular_price', true);
        $product_detail['price'] = get_post_meta($product->ID, '_price', true);

        $metakeys = get_post_meta($product->ID);
        if (is_array($metakeys))
        {
            foreach (array_keys($metakeys) as $key)
            {
                if (!in_array($key, $this->backlist_metatags))
                {
                    $product_detail['x_metadata'][$key] = get_post_meta($product->ID, $key, true);
                }
            }
        }

        $currency_pos = get_option('woocommerce_currency_pos');
        $format = '%1$s%2$s';

        switch ($currency_pos)
        {
            case 'left':
                $format = '%1$s%2$s';
                break;
            case 'right':
                $format = '%2$s%1$s';
                break;
            case 'left_space':
                $format = '%1$s&nbsp;%2$s';
                break;
            case 'right_space':
                $format = '%2$s&nbsp;%1$s';
                break;
        }

        if (function_exists('wc_price'))
        {
            $product_detail['price_html'] = wc_price(get_post_meta($product->ID, '_price', true));
        } else
        {
            $product_detail['price_html'] = 'error';
        }
        $product_detail['sale_price'] = get_post_meta($product->ID, '_sale_price', true);
        $product_detail['sale_price_dates_from'] = get_post_meta($product->ID, '_sale_price_dates_from', true);
        $product_detail['sale_price_dates_to'] = get_post_meta($product->ID, '_sale_price_dates_to', true);
        $product_detail['virtual'] = get_post_meta($product->ID, '_virtual', true);
        $product_detail['tax_status'] = get_post_meta($product->ID, '_tax_status', true);
        $product_detail['tax_class'] = get_post_meta($product->ID, '_tax_class', true);
        $product_detail['visibility'] = get_post_meta($product->ID, '_visibility', true);
        $product_detail['purchase_note'] = get_post_meta($product->ID, '_purchase_note', true);


        $product_attrs = $_product_attrs = array();
        $product_attributes_html = $_product_attributes_html = null;
        $product_attributes = get_post_meta($product->ID, '_product_attributes', true);
        $x = 0;
        if (!isset($product_attributes))
        {
            $product_attributes = array();
        }

        if ($product_attributes == '')
        {
            $product_attributes = array();
        }

        if (is_array($product_attributes))
        {
            foreach ($product_attributes as $product_attribute)
            {
                $var = $product_attribute['name'];
                $y = 0;
                foreach (get_terms(array($var)) as $opt)
                {
                    $_product_attrs[$var][$y] = $opt->name;
                    $product_attrs[$x][$y] = $opt->name;
                    $product_attrs_html[$var][] = $opt->name;
                    $y++;
                }
                $_product_attributes_html[$var] = '<span>' . implode($product_attrs_html[$var], '<span>, </span>') . '</span>';
                $product_attributes_html[] = '<span>' . implode($product_attrs_html[$var], '<span>, </span>') . '</span>';
                $x++;
            }
        }
        $product_detail['attributes']['value'] = $product_attrs;
        $product_detail['attributes']['_value'] = $_product_attrs;
        $product_detail['attributes_html']['value'] = $product_attributes_html;
        $product_detail['attributes_html']['_value'] = $_product_attributes_html;

        $thumbnail_id = get_post_thumbnail_id($product->ID);
        $thumbnail = wp_get_attachment_image_src($thumbnail_id);
        $thumbnail_original = wp_get_attachment_image_src($thumbnail_id, 'original');
        $thumbnail_medium = wp_get_attachment_image_src($thumbnail_id, 'medium');
        $thumbnail_large = wp_get_attachment_image_src($thumbnail_id, 'large');

        $product_detail['featured']['thumbnail'] = $thumbnail[0];
        $product_detail['featured']['medium'] = $thumbnail_medium[0];
        $product_detail['featured']['large'] = $thumbnail_large[0];
        $product_detail['featured']['original'] = $thumbnail_original[0];

        //TODO: product -> meta_galleries
        $meta_galleries = IMH_WOO_ACF_GALLERY;
        $_product_image_gallery = get_post_meta($product->ID, $meta_galleries, true);
        $image_gallery = $image_slidebox = $galleries_ids = array();

        if (IMH_WOO_ACF_GALLERY_OBJECT == false)
        {
            $galleries_ids = explode(",", $_product_image_gallery);
        } else
        {
            $galleries_ids = $_product_image_gallery;
        }
        if (!is_array($galleries_ids))
        {
            $galleries_ids = array();
        }
        foreach ($galleries_ids as $galleries_id)
        {
            if (is_numeric($galleries_id))
            {
                $image_gallery[] = wp_get_attachment_url($galleries_id);
                $image_slidebox[] = '<img src="' . wp_get_attachment_url($galleries_id) . '" />';
            }
        }

        $product_detail['image_gallery'] = $image_gallery;
        $product_detail['image_slidebox'] = implode('|', $image_slidebox);

        return $product_detail;
    }

    /**
     * IMHrestApiHelper::rest_route_products_callback()
     * 
     * @param mixed $request
     * @return
     */
    function rest_route_products_callback($request)
    {
        $parameters = $request->get_query_params();
        $new_products = array();

        if (isset($parameters["per_pages"]))
        {
            $numberposts = (int)$parameters["per_pages"];
        } else
        {
            $numberposts = -1;
        }

        $args = array(
            'post_type' => 'product',
            'posts_per_page' => $numberposts,
            'post_status' => 'publish',
            );

        if (isset($parameters["categories"]))
        {
            $args['tax_query'] = array(array(
                    'taxonomy' => 'product_cat',
                    'field' => 'term_id',
                    'terms' => (int)$parameters["categories"],
                    'operator' => 'IN',
                    ));

        }

        $z = 0;
        $products = get_posts($args);
        if (is_array($products))
        {
            foreach ($products as $product)
            {
                $new_products[$z]['id'] = $product->ID;
                $new_products[$z]['name'] = $product->post_title;
                $new_products[$z]['short_description'] = $product->post_excerpt;
                $new_products[$z]['description'] = $product->post_content;
                $new_products[$z]['permalink'] = html_entity_decode($product->guid);
                $new_products[$z]['average_rating'] = get_post_meta($product->ID, '_wc_average_rating', true);

                $new_products[$z]['regular_price'] = get_post_meta($product->ID, '_regular_price', true);
                $new_products[$z]['price'] = get_post_meta($product->ID, '_price', true);

                if (function_exists('wc_price'))
                {
                    $new_products[$z]['price_html'] = wc_price(get_post_meta($product->ID, '_price', true));
                } else
                {
                    $new_products[$z]['price_html'] = 'error';
                }

                $new_products[$z]['sale_price'] = get_post_meta($product->ID, '_sale_price', true);
                $new_products[$z]['sale_price_dates_from'] = get_post_meta($product->ID, '_sale_price_dates_from', true);
                $new_products[$z]['sale_price_dates_to'] = get_post_meta($product->ID, '_sale_price_dates_to', true);
                $new_products[$z]['total_sales'] = get_post_meta($product->ID, 'total_sales', true);
                $new_products[$z]['virtual'] = get_post_meta($product->ID, '_virtual', true);
                $new_products[$z]['tax_status'] = get_post_meta($product->ID, '_tax_status', true);
                $new_products[$z]['tax_class'] = get_post_meta($product->ID, '_tax_class', true);
                $new_products[$z]['visibility'] = get_post_meta($product->ID, '_visibility', true);
                $new_products[$z]['purchase_note'] = get_post_meta($product->ID, '_purchase_note', true);

                $product_attrs = $_product_attrs = array();
                $product_attributes_html = $_product_attributes_html = null;
                $product_attributes = get_post_meta($product->ID, '_product_attributes', true);

                $x = 0;
                if (!isset($product_attributes))
                {
                    $product_attributes = array();
                }

                if ($product_attributes == '')
                {
                    $product_attributes = array();
                }

                if (is_array($product_attributes))
                {
                    foreach ($product_attributes as $product_attribute)
                    {
                        $var = $product_attribute['name'];
                        $y = 0;
                        foreach (get_terms(array($var)) as $opt)
                        {
                            $_product_attrs[$var][$y] = $opt->name;
                            $product_attrs[$x][$y] = $opt->name;
                            $product_attrs_html[$var][] = $opt->name;
                            $y++;
                        }
                        $_product_attributes_html[$var] = '<span>' . implode($product_attrs_html[$var], '<span>, </span>') . '</span>';
                        $product_attributes_html[] = '<span>' . implode($product_attrs_html[$var], '<span>, </span>') . '</span>';
                        $x++;
                    }
                }
                $new_products[$z]['attributes']['value'] = $product_attrs;
                $new_products[$z]['attributes']['_value'] = $_product_attrs;
                $new_products[$z]['attributes_html']['value'] = $product_attributes_html;
                $new_products[$z]['attributes_html']['_value'] = $_product_attributes_html;


                $metakeys = get_post_meta($product->ID);
                if (is_array($metakeys))
                {
                    foreach (array_keys($metakeys) as $key)
                    {
                        if (!in_array($key, $this->backlist_metatags))
                        {
                            $new_products[$z]['x_metadata'][$key] = get_post_meta($product->ID, $key, true);
                        }
                    }
                }


                $thumbnail_id = get_post_thumbnail_id($product->ID);
                $thumbnail = wp_get_attachment_image_src($thumbnail_id);
                $thumbnail_original = wp_get_attachment_image_src($thumbnail_id, 'original');
                $thumbnail_medium = wp_get_attachment_image_src($thumbnail_id, 'medium');
                $thumbnail_large = wp_get_attachment_image_src($thumbnail_id, 'large');

                $new_products[$z]['featured']['thumbnail'] = $thumbnail[0];
                $new_products[$z]['featured']['medium'] = $thumbnail_medium[0];
                $new_products[$z]['featured']['large'] = $thumbnail_large[0];
                $new_products[$z]['featured']['original'] = $thumbnail_original[0];

                //TODO: products -> meta_galleries
                $meta_galleries = IMH_WOO_ACF_GALLERY;
                $_product_image_gallery = get_post_meta($product->ID, $meta_galleries, true);
                $image_gallery = $image_slidebox = array();


                if (IMH_WOO_ACF_GALLERY_OBJECT == false)
                {
                    $galleries_ids = explode(",", $_product_image_gallery);
                } else
                {
                    $galleries_ids = $_product_image_gallery;
                }
                if (!is_array($galleries_ids))
                {
                    $galleries_ids = array();
                }
                foreach ($galleries_ids as $galleries_id)
                {
                    if (is_numeric($galleries_id))
                    {
                        $image_gallery[] = wp_get_attachment_url($galleries_id);
                        $image_slidebox[] = '<img src="' . wp_get_attachment_url($galleries_id) . '" />';
                    }
                }

                $new_products[$z]['image_gallery'] = $image_gallery;
                $new_products[$z]['image_slidebox'] = implode('|', $image_slidebox);
                $new_products[$z]['_links']['self'] = get_option('siteurl') . '/wp-json/ima_wc/v2/products/' . $product->ID;


                $z++;
            }
        }


        return $new_products;
    }

    /**
     * IMHrestApiHelper::imh_init()
     * 
     * @return void
     */
    function imh_init()
    {
        if (isset($this->options['custom_field_blacklist']))
        {
            $metatags = explode(",", $this->options['custom_field_blacklist']);
            if (is_array($metatags))
            {
                foreach ($metatags as $metatag)
                {
                    $this->backlist_metatags[] = ltrim(rtrim($metatag));
                }
            }
        }
    }

    /**
     * IMHrestApiHelper::imh_rest_api_init()
     * 
     * @return void
     */
    function imh_rest_api_init()
    {

        register_rest_field('page', 'content', array(
            'get_callback' => array($this, 'imh_do_shortcodes'),
            'update_callback' => null,
            'schema' => null,
            ));

        register_rest_field('post', 'content', array(
            'get_callback' => array($this, 'imh_do_shortcodes'),
            'update_callback' => null,
            'schema' => null,
            ));
    }


    function imh_do_shortcodes($object, $field_name, $request)
    {
        global $post;

        if (IMH_VC_SHORTCODE == true)
        {
            // visual composer
            if (class_exists('WPBMap'))
            {
                WPBMap::addAllMappedShortcodes();
            }
        }
        $post = get_post($object['id']);
        $output['rendered'] = apply_filters('the_content', $post->post_content);
        return $output;
    }


    /**
     * Add option page.
     * @link http://codex.wordpress.org/Function_Reference/add_options_page
     * @access public
     * @return void
     **/
    public function imh_admin_menu_option_page()
    {
        add_options_page(__("REST API Helper Option", "rest-api-helper"), //page title
            __("REST API Helper Option", "rest-api-helper"), //menu title
            "manage_options", //capability
            "imh_settings", //slug
            array($this, "imh_admin_menu_option_page_markup"));
    }


    /**
     * Create option page markup
     *
     * @access public
     * @return void
     **/
    public function imh_admin_menu_option_page_markup()
    {
        $this->options = get_option("rest_api_helper_plugins");
        _e("<div class='wrap'>");
        _e("<h1>" . __("REST API Helper", "rest-api-helper") . "</h1>");
        _e("<div class='postbox'>");
        _e("<div class='inside'>");
        _e("<form method='post' action='options.php'>");
        // This prints out all hidden setting fields
        settings_fields("imh_option_group");
        do_settings_sections("imh-settings");
        submit_button();
        _e("</form>");
        _e("</div>");
        _e("</div>");
        _e("</div>");
    }


    /**
     * option instance
     * @link https://codex.wordpress.org/Function_Reference/register_setting
     * @access public
     * @return void
     **/
    public function imh_admin_menu_option_init()
    {

        #info: https://codex.wordpress.org/Function_Reference/register_setting
        register_setting("imh_option_group", // group
            "rest_api_helper_plugins", //name
            array($this, "imh_admin_menu_option_sanitize") //sanitize_callback
            );

        #info: https://codex.wordpress.org/Function_Reference/add_settings_section
        add_settings_section("imh_section_id", //id
            __("Settings", "rest-api-helper"), //title
            array($this, "imh_admin_menu_option_section_info"), //callback
            "imh-settings" //page
            );


        #info: https://codex.wordpress.org/Function_Reference/add_settings_field
        add_settings_field("custom_field_blacklist", //id
            __("Custom Field Blacklist", "rest-api-helper"), //title
            array($this, "imh_admin_menu_option_custom_field_blacklist_callback"), //callback
            "imh-settings", //page
            "imh_section_id" //section
            );

        #info: https://codex.wordpress.org/Function_Reference/add_settings_field
        add_settings_field("json_mode", //id
            __("JSON Mode", "rest-api-helper"), //title
            array($this, "imh_admin_menu_option_json_mode_callback"), //callback
            "imh-settings", //page
            "imh_section_id" //section
            );

    }


    /**
     * Sanitize Callback 
     * A callback function that sanitizes the option's value
     * 
     * @param mixed $input
     * @see imh_admin_menu_option_init()
     **/
    public function imh_admin_menu_option_sanitize($input)
    {
        $new_input = array();
        if (isset($input["auth_basic_for"]))
            $new_input["auth_basic_for"] = sanitize_text_field($input["auth_basic_for"]);

        if (isset($input["custom_field_blacklist"]))
            $new_input["custom_field_blacklist"] = sanitize_text_field($input["custom_field_blacklist"]);

        if (isset($input["json_mode"]))
            $new_input["json_mode"] = sanitize_text_field($input["json_mode"]);

        return $new_input;
    }


    /**
     * Option page callback (auth_basic_for)
     * 
     * @return void
     * @see imh_admin_menu_option_init()
     **/
    public function imh_admin_menu_option_auth_basic_for_callback()
    {
        if (isset($this->options["auth_basic_for"]))
        {
            $current_imh_option_auth_basic_for = esc_attr($this->options["auth_basic_for"]);
        } else
        {
            $current_imh_option_auth_basic_for = "";
        }


        /**
         * Create HTML Drowndown Users Using API
         * @see https://codex.wordpress.org/Function_Reference/wp_dropdown_users
         */

        $args = array(
            "echo" => 0,
            "name" => "rest_api_helper_plugins[auth_basic_for]",
            "id" => "imh_option_auth_basic_for", // string
            "class" => "imh imh-form-control reguler-text", // string
            "selected" => $current_imh_option_auth_basic_for // string
                );
        $dropdown_users = wp_dropdown_users($args);
        $description = __("Please select a user", "imh-textdomain");
        printf("%s<p class='description'>%s</p>", $dropdown_users, $description);
    }


    /**
     * Option page callback (custom_field_blacklist)
     * 
     * @return void
     * @see imh_admin_menu_option_init()
     **/
    public function imh_admin_menu_option_custom_field_blacklist_callback()
    {
        if (isset($this->options["custom_field_blacklist"]))
        {
            $current_imh_option_custom_field_blacklist = esc_attr($this->options["custom_field_blacklist"]);
        } else
        {
            $current_imh_option_custom_field_blacklist = "";
        }
        $description = __("separator with coma", "rest-api-helper");
        printf("<textarea class='imh imh-form-control large-text' id='imh_option_custom_field_blacklist' name='rest_api_helper_plugins[custom_field_blacklist]' >%s</textarea><p class='description'>%s</p>", $current_imh_option_custom_field_blacklist, $description);
    }


    /**
     * Option page callback (json_mode)
     * 
     * @return void
     * @see imh_admin_menu_option_init()
     **/
    public function imh_admin_menu_option_json_mode_callback()
    {
        if (isset($this->options["json_mode"]))
        {
            $current_imh_option_json_mode = esc_attr($this->options["json_mode"]);
        } else
        {
            $current_imh_option_json_mode = "restapi2";
        }
        $input = null;
        $input_options = array();
        $input_options[] = array("value" => "restapi2", "label" => __("WP REST-API", "rest-api-helper"));
        //$input_options[] = array("value" => "json_encode", "label" => __("PHP JSON Encode", "rest-api-helper"));
        $input .= "<select class='imh-form-control reguler-text' id='imh_option_json_mode' name='rest_api_helper_plugins[json_mode]' >";
        foreach ($input_options as $input_option)
        {
            $selected = "";
            if ($input_option["value"] == $current_imh_option_json_mode)
            {
                $selected = "selected";
            }
            $input .= "<option value='" . $input_option["value"] . "' " . $selected . ">" . $input_option["label"] . "</option>";
        }
        $input .= "</select>";
        printf($input);
    }


    /**
     * Display page option section
     * @access public
     * @return void
     **/
    public function imh_admin_menu_option_section_info()
    {
        _e("Enter your settings below:", "rest-api-helper");
    }


    /**
     * IMHrestApiHelper::imh_post_type()
     * 
     * @return void
     */
    public function imh_post_type()
    {
        $new_value = array();
        foreach (get_post_types(array('show_ui' => true), 'names') as $post_type)
        {
            $new_value[] = $post_type;
        }
        update_option("imh_post_type", json_encode($new_value), true);
    }

    /**
     * IMHrestApiHelper::imh_rest_prepare_post()
     * 
     * @param mixed $data
     * @param mixed $term
     * @param mixed $context
     * @return
     */
    public function imh_rest_prepare_post($data, $term, $context)
    {

        $_data = $data->data;

        $thumbnail_id = get_post_thumbnail_id($_data["id"]);
        $thumbnail = wp_get_attachment_image_src($thumbnail_id);
        $thumbnail_original = wp_get_attachment_image_src($thumbnail_id, 'original');
        $thumbnail_medium = wp_get_attachment_image_src($thumbnail_id, 'medium');
        $thumbnail_large = wp_get_attachment_image_src($thumbnail_id, 'large');

        if (isset($_data['categories']))
        {
            $ionic_categories = array();
            foreach ($_data['categories'] as $cat_id)
            {
                $terms = get_term($cat_id);
                $ionic_categories[] = $terms->name;
            }
            $_data['x_categories'] = implode(", ", $ionic_categories);
        }

        if (isset($_data['code_category']))
        {
            $ionic_categories = array();
            foreach ($_data['code_category'] as $cat_id)
            {
                $terms = get_term($cat_id);
                $ionic_categories[] = $terms->name;
            }
            $_data['x_code_category'] = implode(", ", $ionic_categories);
        }

        if (isset($_data['tags']))
        {
            $ionic_tags = array();
            foreach ($_data['tags'] as $tags_id)
            {
                $terms = get_term($tags_id);
                $ionic_tags[] = $terms->name;
            }
            $_data['x_tags'] = implode(", ", $ionic_tags);
        }


        global $wpdb;
        $table = _get_meta_table('post');
        if (!$table)
        {
            return false;
        }

        $metakeys = $wpdb->get_results($wpdb->prepare("SELECT meta_key FROM `$table` WHERE `post_id`=%d", $_data["id"]));

        if (isset($thumbnail[0]))
        {
            $_data['x_featured_media'] = $thumbnail[0];
        }

        if (isset($thumbnail_medium[0]))
        {
            $_data['x_featured_media_medium'] = $thumbnail_medium[0];
        }

        if (isset($thumbnail_large[0]))
        {
            $_data['x_featured_media_large'] = $thumbnail_large[0];
        }

        if (isset($thumbnail_original[0]))
        {
            $_data['x_featured_media_original'] = $thumbnail_original[0];
        }


        $_data['x_date'] = get_the_date(get_option('date_format'), $_data["id"]);

        if (isset($_data["author"]))
        {
            $_data['x_author'] = get_the_author($_data["author"]);
            $_data['x_gravatar'] = get_avatar_url($_data["author"]);
        }


        //$_data['x_content'] = do_shortcode($_data["content"]["rendered"]);
        foreach ($metakeys as $key)
        {
            if (!in_array($key->meta_key, $this->backlist_metatags))
            {
                $_data['x_metadata'][str_replace('-', '_', $key->meta_key)] = get_post_meta($_data["id"], $key->meta_key, true);
            }
        }
        $_data_img = array();


        //TODO: post -> meta_galleries
        $meta_galleries = IMH_WOO_ACF_GALLERY;

        if (get_post_meta($_data["id"], $meta_galleries, true))
        {
            if (IMH_WOO_ACF_GALLERY_OBJECT == false)
            {
                $image_galleries = explode(",", get_post_meta($_data["id"], $meta_galleries, true));
            } else
            {
                $image_galleries = get_post_meta($_data["id"], $meta_galleries, true);
            }

            if (is_array($image_galleries))
            {
                foreach ($image_galleries as $image_gallery)
                {
                    $image_galleries = wp_get_attachment_image_src((int)$image_gallery, 'original');
                    if (isset($image_galleries[0]))
                    {
                        $_data['x_product_image_gallery'][] = $image_galleries[0];
                        $_data_img[] = '<img src="' . $image_galleries[0] . '" />';
                    }
                }
            }
            if (count($_data_img) > 0)
            {
                $_data['x_slidebox'] = implode('|', $_data_img);
            }

        }


        $data->data = $_data;
        return $data;
    }

    /**
     * IMHrestApiHelper::imh_handle_http_json()
     * 
     * @return void
     */
    function imh_handle_http_json()
    {

        if (preg_match("/json|api/", $_SERVER["REQUEST_URI"]))
        {
            //header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');

            if (isset($_SERVER['HTTP_ORIGIN']))
            {
                header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
                header('Access-Control-Allow-Credentials: true');
                header('Access-Control-Max-Age: 86400'); // cache for 1 day
            }

            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
            {
                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
            }
            header("X-Powered-By: Ionic Mobile App Builder");
        }

    }


    /**
     * Loads the plugin's translated strings
     * @link http://codex.wordpress.org/Function_Reference/load_plugin_textdomain
     * @access public
     * @return void
     **/
    public function imh_textdomain()
    {
        load_plugin_textdomain("rest-api-helper", false, IMH_DIR . "/languages");
    }

}


new IMHrestApiHelper();
