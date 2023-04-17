=== Rest Routes – Custom Endpoints for WP REST API ===
Contributors: wp-making, freemius
Donate link:
Tags: REST, custom, route, endpoint, custom endpoint, custom route, API
Requires at least: 4.4
Tested up to: 6.1.1
Stable tag: 4.4.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Extend the WP REST API by creating unlimited advanced custom routes for your site.

== Description ==

https://youtu.be/HUa-AOvh998

Have you ever thought about the possibility of adding custom endpoints for WP REST API without touching a single line of PHP? That can be easily done with Rest Routes! It lets you build awesome custom endpoints for your site.

You can create unlimited custom routes for your site using a very friendly interface. In a very few steps and you will have your new endpoint available through WP REST API:

* Give the custom endpoint a name
* Customize it with as many filters as you wish
* Define which fields you will want to expose through the route. You can expose both default and custom fields
* Enjoy the WP REST API custom endpoint you just built without writing a single line of code

The free version comes with basic features, such as:

* Show custom posts
* Show default fields, attached custom fields and taxonomies
* Filter by default post fields
* Define limit and offset for your results
* Define custom order for your results

= Upgrade to Rest Routes Pro for unlocking all the power! =

[Rest Routes Pro](http://restroutes.com/) comes up with a completely redesigned interface plus lots of more features that will let you create fully customized routes:

- Awesome and friendly interface for building custom routes
- All HTTP methods are allowed
- Build routes for custom tables
- Build routes for posts
- Build routes for taxonomies
- Build routes for users
- Build routes for editing posts as well as connected custom fields and taxonomies
- Multiple endpoints per route
- Custom parameters
- Custom post types and taxonomies ready
- Powerful advanced engine for building complex custom queries
- Privacy control
- Much more filters available
- Custom fields and taxonomies connection on post creation
- Custom fields creation
- Custom taxonomies filter
- Custom fields filter
- Posts creation
- Custom routes duplication
- Dynamic data available (current date, current user, etc)
- Compatible with ACF and ACF Pro (single and repeating fields)
- Compatible with Toolset Types (single and repeating fields)
- Premium Support

[Click here](http://restroutes.com/pricing/) and compare the Free against the Pro version.

= Pro Feature: Building a route for displaying posts with a filter =

https://youtu.be/HUa-AOvh998

= Pro Feature: Building a route for creating custom posts =

https://youtu.be/amfbMOr-jVE

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/rest-routes` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress

== Screenshots ==

1. Customizing the output of the endpoint
2. Adding filters to the route
3. All the available HTTP methods (Pro)
4. All the available Endpoint Types (Pro)

== Changelog ==

= 5.5.2 =

- FREE: Added missing file

= 5.5.1 =

- FREE: Pagination feature added in Limit & Offset section
- PRO: Fixed error happening on output sorting when no field was defined

= 5.5.0 =

- PRO: Added pagination features
- PRO: Added hook for REST API call endpoint type response body
- PRO: Added placeholder replacer for Custom SQL query endpoint type

= 5.4.1 =

- PRO: Fixed display users route not editable

= 5.4.0 =

- PRO: Pagination added / Limit Offset fixed

= 5.3.0 =

- PRO: Added Basic Authentication
- PRO: Fixed date filter

= 5.2.0 =

- FREE/PRO: Added generated endpoint URL visualization in the edit screen
- FREE/PRO: Fixed bug in the output order fields

= 5.1.2 =

- FREE: Added missing files

= 5.1.1 =

- FREE: Added missing files

= 5.1.0 =

- FREE: Upgrade of free version + opened many premium features

= 5.0.1 =

- PRO: Added missing codemirror assets

= 5.0.0 =

- PRO: Added new endpoint type, Custom SQL Query
- PRO: Added new endpoint type, REST API call
- PRO: Added conditional display for output of fields
- PRO: Enhanced support to ACF
- PRO: Added possibility to change the order of fields in the output
- PRO: Added parent taxonomy in the Display Taxonomies output
- PRO: Added collapsible options for fields in filter and output
- PRO: Several bug fixes

= 4.17.1 =

- FREE/PRO: Security Fixes

= 4.13.0 =

- FREE/PRO: Fixed problem with malformed strings in endpoint
- FREE/PRO: Fixed problem with fixed filter values
- FREE/PRO: Fixed problem with the URL of fresh custom endpoints when saving
- FREE/PRO: Fixed bug in the enqueuing of Rest Routes scripts
- FREE/PRO: Fixed bug in the Save button on RTL
- PRO: Added filter for changing the custom table database
- PRO: Added parent fields as output options

= 4.12.0 =

- FREE: Fixed bug when creating new custom endpoints
- FREE: Improved performance

= 4.11.0 =

- PRO: Fixed issue in custom tables display route when trying to use Current User ID dynamic filter
- PRO: Implemented a new source, request body, for custom table endpoints

= 4.10.0 =

- PRO: Added a few checks to avoid fatal error with malformed strings

= 4.9.0 =

- PRO: Fixed issue with custom table filter not allowing OR filters

= 4.8.0 =

- PRO|FREE: Updated the Freemius library

= 4.7.0 =

- PRO: Fixed issue of tabs no being displayed
- PRO: Fixed issue of user meta fields not being properly displayed in the routes

= 4.6.0 =

- Free: Fixed issue which was avoiding the creation of new endpoints

= 4.1.0 =

- FREE: Implemented the PRO interface with PRO features locked

= 4.0.0 =

- PRO: Introduced permalink as an output field for posts
- PRO: Introduced endpoint action for inserting items on custom database tables
- PRO: Introduced endpoint action for editing items on custom database tables
- PRO: Introduced endpoint action for deleting items on custom datbase tables
- PRO: Introduced endpoint action for deleting items on custom datbase tables
- PRO: Introduced endpoint action for creating users
- PRO: Introduced endpoint action for editing users
- PRO: Introduced endpoint action for updating users
- PRO: Several UI changes for improving the user experience
- PRO: Security fixes
- PRO: Fixed issue with terms filter
- PRO: Fixed the permission of some internal routes
- PRO: Added option to choose whether you want to append terms when creating a post or not

= 3.4.0 =

- PRO: Added compatibility with ACF and ACF Pro (single and repeating fields)
- Fixed bug when rendering posts from multiple post types

= 3.1.0 =

- Fixed a bug when editing custom endpoints for custom tables

= 3.0.0 =

- Added the possibility of creating custom endpoints for custom tables
- Fixed some bugs
- Performance improvements

= 2.2.3 =

- Fixed bugs

= 2.2.2 =

- Fixed bug in the route duplication

= 2.2.1 =

- Fixed bug when adding more than 5 routes
- Implemented new feature for duplicating routes

= 2.2.0 =

- Added "Display Taxonomies" endpoint action
- Added feature for outputting the featured image
- Added feature for outputting post attachments
- Added feature for choosing which term fields to output in the "Display Posts" endpoint action
- Added feature for outputting term meta fields in the "Display Posts" endpoint action
- Fixing bugs
- Performance improvements

- Fixing bugs

= 2.0.13 =

- Fixing bugs

= 2.0.12 =

- Fixing bugs

= 2.0.11 =

- Fixing bugs

= 2.0.10 =

- Fixing bugs

= 2.0.9 =

- Fixing bugs

= 2.0.8 =

- Fixing bugs

= 2.0.7 =

- Fixing bugs

= 2.0.6 =

- Fixing bugs

= 2.0.5 =

- Fixing bugs

= 2.0.4 =

- Fixing wrong redirection after update

= 2.0.3 =

- Fixing wrong redirection after update

= 2.0.2 =

- Missing folders

= 2.0.1 =

- Missing folders

= 2.0.0 =

- Fixed bugs
- Introduced Pro upgrade

= 1.7.0 =

- Fixed version number

= 1.6.0 =

- Fixed version number

= 1.5.0 =

- Fixed some PHP notices

= 1.4.0 =

- Fixed bugs

= 1.3.0 =

- Fixed bugs

= 1.2.0 =

- Fixed a bug when creating a route with only one field in output

= 1.1.0 =

- Fixed a some warning messages
- Added support to custom post types

= 1.0.0 =
First release.
