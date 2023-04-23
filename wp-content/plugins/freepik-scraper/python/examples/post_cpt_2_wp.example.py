import requests

# Set the API endpoint URL
url = 'https://akreev.local/wp-json/wp/v2/posts'

# Set the authentication credentials (if needed)
auth = ('username', 'password')

# Set the post data
data = {
    'title': 'New Post Title',
    'content': 'This is the content of the new post.',
    'status': 'publish'
}

# Send the POST request to create the new post
response = requests.post(url, auth=auth, json=data)

# Check the status code of the response
if response.status_code == 201:
    print('New post created successfully!')
else:
    print(f'Error creating new post: {response.text}')
