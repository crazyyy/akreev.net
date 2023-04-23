import requests
import json
import base64

# Set the API endpoint and authentication details
api_url = 'https://akreev.local/wp-json/wp/v2/'
username = 'your_username'
password = 'your_password'

# Set the image file path and metadata
image_path = '/data/images/3147024-preview.png'
# image_path = '/path/to/image.jpg'
image_alt = 'Image ALT text'
image_title = 'Image title'

# Define the post data with the image metadata
post_data = {
    'alt_text': image_alt,
    'title': image_title,
    'status': 'publish'
}

# Set the headers and authentication for the image upload request
headers = {
    'Content-Disposition': 'attachment; filename="{}"'.format(image_path.split('/')[-1]),
    'Content-Type': 'image/jpeg',
    'Authorization': 'Basic ' + base64.b64encode(bytes(username + ':' + password, 'ascii')).decode('ascii')
}

# Upload the image and retrieve the image ID from the response
image_url = api_url + 'media'
response = requests.post(image_url, headers=headers, data=open(image_path, 'rb'))
image_id = json.loads(response.content.decode('utf-8'))['id']

# Define the post data for the article with the image ID as the featured image
post_data = {
    'title': 'New Post',
    'content': 'This is a new post with an image.',
    'featured_media': image_id,
    'fields': {
        'original_page': 'xxxsasdas'
    },
    'status': 'publish'
}

# Set the headers and authentication for the post request
headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + b64encode(bytes(username + ':' + password, 'ascii')).decode('ascii')
}

# Post the article and check the response status code
post_url = api_url + 'collection'
response = requests.post(post_url, headers=headers, data=json.dumps(post_data))
if response.status_code == 201:
    print('Article posted successfully with image ID', image_id)
else:
    print('Error posting article:', response.content)
