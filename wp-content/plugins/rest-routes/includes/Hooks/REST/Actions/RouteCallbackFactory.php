<?php

declare(strict_types=1);

namespace RestRoutes\Hooks\REST\Actions;

use RestRoutes\CustomTable\DbConnection;
use RestRoutes\Helpers\EndpointFinder;
use RestRoutes\Hooks\REST\Actions\CreateCustomTable\Callback as CreateCustomTableCallback;
use RestRoutes\Hooks\REST\Actions\CreateCustomTable\QueryBuilder as CreateTableQueryBuilder;
use RestRoutes\Hooks\REST\Actions\CreatePosts\Callback as CreatePostsCallback;
use RestRoutes\Hooks\REST\Actions\CreateTaxonomies\Callback as CreateTaxonomiesCallback;
use RestRoutes\Hooks\REST\Actions\CreateUsers\Callback as CreateUsersCallback;
use RestRoutes\Hooks\REST\Actions\DeleteCustomTable\Callback as DeleteCustomTableCallback;
use RestRoutes\Hooks\REST\Actions\DeleteCustomTable\QueryBuilder as DeleteTableQueryBuilder;
use RestRoutes\Hooks\REST\Actions\DisplayCustomTable\Callback as DisplayCustomTableCallback;
use RestRoutes\Hooks\REST\Actions\DisplayCustomTable\QueryBuilder;
use RestRoutes\Hooks\REST\Actions\DisplayData\Callback as DisplayDataCallback;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\CustomFields;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\DefaultFields;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\OffsetLimit;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\Ordering;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\Paged;
use RestRoutes\Hooks\REST\Actions\DisplayData\Parser\Taxonomies;
use RestRoutes\Hooks\REST\Actions\DisplayData\QueryBuilder as PostsQueryBuilder;
use RestRoutes\Hooks\REST\Actions\DisplayTaxonomies\QueryBuilder as TaxonomiesQueryBuilder;
use RestRoutes\Hooks\REST\Actions\DisplayUsers\QueryBuilder as UsersQueryBuilder;
use RestRoutes\Hooks\REST\Actions\EditCustomTable\Callback as EditCustomTableCallback;
use RestRoutes\Hooks\REST\Actions\EditCustomTable\QueryBuilder as EditTableQueryBuilder;
use RestRoutes\Hooks\REST\Actions\EditPost\Callback as EditPostCallback;
use RestRoutes\Hooks\REST\Actions\EditUser\Callback as EditUserCallback;
use RestRoutes\Hooks\REST\Actions\RestApiCall\Callback as RestApiCallCallback;
use RestRoutes\Hooks\REST\Actions\CustomSQLQuery\Callback as CustomSQLQueryCallback;

class RouteCallbackFactory
{
    public const CREATION = 'create_post';
    public const POSTS_DISPLAY = 'display_data';
    public const TAXONOMIES_DISPLAY = 'display_taxonomies';
    public const TAXONOMIES_CREATE = 'create_taxonomies';
    public const TAXONOMIES_EDIT = 'edit_taxonomies';
    public const CUSTOM_TABLES_DISPLAY = 'display_custom_table';
    public const EDIT_POST = 'edit_post';
    public const CUSTOM_TABLES_CREATE = 'create_custom_table';
    public const CUSTOM_TABLES_EDIT = 'edit_custom_table';
    public const CUSTOM_TABLES_DELETE = 'delete_custom_table';
    public const DISPLAY_USERS = 'display_users';
    public const EDIT_USERS = 'edit_users';
    public const CREATE_USERS = 'create_users';
    public const REST_API_CALL = 'rest_api_call';
    public const CUSTOM_SQL_QUERY = 'custom_sql_query';

    public function create($action)
    {
        global $wpdb;

        switch ($action) {
            case self::EDIT_POST:
                return new EditPostCallback(new EndpointFinder());
            case self::EDIT_USERS:
                return new EditUserCallback(new EndpointFinder());
            case self::CREATE_USERS:
                return new CreateUsersCallback(new EndpointFinder());
            case self::CREATION:
                return new CreatePostsCallback(new EndpointFinder());
            case self::POSTS_DISPLAY:
                return new DisplayDataCallback(
                    new PostsQueryBuilder(
                        [
							new DefaultFields(),
							new OffsetLimit(),
							new Taxonomies(),
							new CustomFields(),
							new Ordering(),
							new Paged(),
                        ]
                    ),
                    new EndpointFinder()
                );
            case self::TAXONOMIES_DISPLAY:
                return new DisplayDataCallback(
                    new TaxonomiesQueryBuilder(
                        [
							new DefaultFields(),
							new OffsetLimit(),
							new CustomFields(),
							new Ordering(),
							new Paged(),
                        ]
                    ),
                    new EndpointFinder()
                );
            case self::TAXONOMIES_CREATE:
                return new CreateTaxonomiesCallback(new EndpointFinder());
            case self::DISPLAY_USERS:
                return new DisplayDataCallback(
                    new UsersQueryBuilder(
                        [
							new DefaultFields(),
							new OffsetLimit(),
							new CustomFields(),
							new Ordering(),
							new Paged(),
                        ]
                    ),
                    new EndpointFinder()
                );
            case self::CUSTOM_TABLES_DISPLAY:
                return new DisplayCustomTableCallback(
                    new EndpointFinder(),
                    new QueryBuilder((new DbConnection($wpdb))->create())
                );
            case self::CUSTOM_TABLES_CREATE:
                return new CreateCustomTableCallback(
                    new EndpointFinder(),
                    new CreateTableQueryBuilder((new DbConnection($wpdb))->create())
                );
            case self::CUSTOM_TABLES_EDIT:
                return new EditCustomTableCallback(
                    new EndpointFinder(),
                    new EditTableQueryBuilder((new DbConnection($wpdb))->create())
                );
            case self::CUSTOM_TABLES_DELETE:
                return new DeleteCustomTableCallback(
                    new EndpointFinder(),
                    new DeleteTableQueryBuilder((new DbConnection($wpdb))->create())
                );
            case self::REST_API_CALL:
                return new RestApiCallCallback(new EndpointFinder());
            case self::CUSTOM_SQL_QUERY:
                return new CustomSQLQueryCallback(new EndpointFinder(), $wpdb);
            default:
                return null;
        }
    }
}
