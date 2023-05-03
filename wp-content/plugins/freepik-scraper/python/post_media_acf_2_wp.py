import json
import os
import datetime
import requests
from dotenv import load_dotenv
from requests.packages.urllib3.exceptions import InsecureRequestWarning
from urllib3.exceptions import SSLError
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)

# Load environment variables from .env file
load_dotenv()

# set up variables for authentication and site URL
username = os.getenv("WP_USERNAME")
password = os.getenv("WP_PASSWORD")
auth = (username, password)

site_url = os.getenv("SITE_URL")

data_directory = './data'
jsons_directory = data_directory + '/json'
imgs_directory = data_directory + '/images'

# set up headers and authentication
headers = {'Content-Type': 'application/json'}

# disable SSL verification
verify_ssl = False

# define function to truncate text to a specified length
def truncate_text(text, length):
    return text[:length] + (text[length:] and '...')

# loop through JSON files in data/json folder
for json_filename in os.listdir(jsons_directory):
    print(json_filename)
    if json_filename.endswith('.json'):
        with open(os.path.join(jsons_directory, json_filename), 'r') as f:
            data = json.load(f)

            # if published field is missing or false, publish images
            if 'published' not in data or data['published'] == False:
                # upload collection preview image and get ID
                thumb_image_path = data['collection_preview']
                print('thumb_image_path')
                print(thumb_image_path)

                current_dir = os.getcwd()
                print("Current directory:", current_dir)

                thumb_image_file_name = os.path.basename(current_dir + '/' + thumb_image_path)
                print('thumb_image_file_name 2:')
                print(thumb_image_file_name)

                print('Try to publish thumb: ' + thumb_image_file_name)
                thumb_image_alt = data['collection_title']
                thumb_image_title = truncate_text(data['collection_description'], 150)
                thumb_image_description = data['collection_description']
                thumb_image_payload={
                  'alt_text': thumb_image_alt,
                  'title': thumb_image_title,
                  'description': thumb_image_description,
                  'caption': thumb_image_description
                }
                thumb_image_file={
                  'file': (thumb_image_file_name, open(thumb_image_path, 'rb'), 'image/png', {'Content-Disposition': 'attachment; filename="' + thumb_image_file_name + '"'})
                }

                response_thumb = requests.post(site_url + '/wp-json/wp/v2/media', auth=auth, data=thumb_image_payload, files=thumb_image_file, verify=verify_ssl)

                response_thumb_id = response_thumb.json()['id']
                print('Thumb published: ' + str(response_thumb_id))

                collection_object = {
                  'collection_description': data['collection_description'],
                  'collection_gallery_img_ids': [],
                  'collection_id': data['collection_id'],
                  'collection_preview': data['collection_preview'],
                  'published': False,
                  'collection_published_id': 0,
                  'collection_published_link': '',
                  'collection_size': data['collection_size'],
                  'collection_title': data['collection_title'],
                  'collection_url': data['collection_url'],
                  'created_at': data['created_at'],
                  'featured_media_id': response_thumb_id,
                  'images': [],
                  'updated_at': ''
                }

                # loop through images and publish them, adding ID to collection gallery and updating postmeta
                for collection_image in data['images']:
                    collection_image_path = collection_image['image_hd_local']
                    collection_image_file_name = os.path.basename(collection_image_path)
                    print('Try to publish gallery image: ' + collection_image_file_name)

                    collection_image_alt = collection_image['image_title']
                    collection_image_title = truncate_text(collection_image['image_title'], 100)
                    collection_image_payload={
                        'alt_text': collection_image_alt,
                        'title': collection_image_title,
                        'description': collection_image_title,
                        'caption': collection_image_title
                    }

                    collection_image_file={
                        'file': (collection_image_file_name, open(collection_image_path, 'rb'), 'image/png', {'Content-Disposition': 'attachment; filename="' + collection_image_file_name + '"'})
                    }

                    response_collection_image = requests.post(site_url + '/wp-json/wp/v2/media', auth=auth, data=collection_image_payload, files=collection_image_file, verify=verify_ssl)

                    response_image_id = response_collection_image.json()['id']
                    response_image_source_url = response_collection_image.json()['source_url']

                    collection_object['collection_gallery_img_ids'].append(response_image_id)

                    print(collection_object['collection_gallery_img_ids'])

                    postmeta_url = site_url + '/wp-json/wp/v3/postmeta'
                    headers = {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }

                    requests.post(postmeta_url, headers=headers, auth=auth, data={'post_id': response_image_id, 'meta_key': 'original_image_link', 'meta_value': collection_image['image_link']}, verify=verify_ssl)
                    requests.post(postmeta_url, headers=headers, auth=auth, data={'post_id': response_image_id, 'meta_key': 'hd_image_link', 'meta_value': collection_image['image_hd']}, verify=verify_ssl)
                    requests.post(postmeta_url, headers=headers, auth=auth, data={'post_id': response_image_id, 'meta_key': 'hd_local_path', 'meta_value': collection_image['image_hd_local']}, verify=verify_ssl)
                    requests.post(postmeta_url, headers=headers, auth=auth, data={'post_id': response_image_id, 'meta_key': 'original_page', 'meta_value': collection_image['link_to_image_page']}, verify=verify_ssl)
                    requests.post(postmeta_url, headers=headers, auth=auth, data={'post_id': response_image_id, 'meta_key': 'id', 'meta_value': collection_image['image_id']}, verify=verify_ssl)

                    collection_image_object = {
                        'collection_image_media_id': response_image_id,
                        'collection_image_source_url': response_image_source_url,
                        'image_alt': collection_image_alt,
                        'image_file_name': collection_image_file_name,
                        'image_hd': collection_image['image_hd'],
                        'image_hd_local': collection_image['image_hd_local'],
                        'image_id': collection_image['image_id'],
                        'image_link': collection_image['image_link'],
                        'image_title': collection_image_title,
                        'link_to_image_page': collection_image['link_to_image_page']
                    }

                    collection_object['images'].append(collection_image_object)

                    print('Gallery image published: ' + str(response_image_id))
                    print('URL: ' + response_image_source_url)
                # end loop through images

                print('Try to publish collection: ' + collection_object['collection_title'])

                collection_gallery_img_ids_str = ', '.join(map(str, collection_object['collection_gallery_img_ids']))

                # Define the post data for the article with the image ID as the featured image
                collection_post_data = {
                    'title': collection_object['collection_title'],
                    'content': collection_object['collection_description'],
                    'featured_media': collection_object['featured_media_id'],
                    'acf[gallery_id]': collection_object['collection_id'],
                    'acf[original_description]': collection_object['collection_description'],
                    'acf[collection_size]': collection_object['collection_size'],
                    'acf[collection_url]': collection_object['collection_url'],
                    'acf[gallery]': collection_gallery_img_ids_str,
                    'status': 'publish'
                }

                post_collection_url = site_url + '/wp-json/wp/v2/collection'
                headers = {
                  'Content-Type': 'application/x-www-form-urlencoded'
                }

                response_post_collection = requests.post(post_collection_url, headers=headers, auth=auth, data=collection_post_data, verify=verify_ssl)

                if response_post_collection.status_code == 201:
                    response_post_collection_id = response_post_collection.json()['id']
                    response_post_collection_link = response_post_collection.json()['link']
                    print('Article posted successfully with image ID', response_post_collection_id)

                    collection_object['collection_published_id'] = response_post_collection_id
                    collection_object['collection_published_link'] = response_post_collection_link

                    print('Collection published: ' + str(response_post_collection_id))
                    print('URL: ' + response_post_collection_link)

                else:
                    print('Error posting article:', response_post_collection.content)

                collection_object['updated_at'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                collection_object['published'] = True

                # Write the updated data to the file
                with open(os.path.join(jsons_directory, json_filename), 'w') as updated_data_json:
                  json.dump(collection_object, updated_data_json)

                print('JSON file updated: ' + json_filename)
                # end loop through collections
            # else:
            #   print('Collection already published: ' + collection_object['collection_title'])
            # end loop through collections
        # end loop through posts
    # end loop through pages
# end main
