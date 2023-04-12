# Importing required libraries
import requests
import os
import re
import json
import time
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.common.by import By


def get_browser_options(browser="chrome"):
    """
    Gets browser options for Chrome browser

    Args:
    browser: browser to get options for; defaults to chrome

    Returns:
    browser_options: webdriver.ChromeOptions object containing browser options
    """
    browser_options = webdriver.ChromeOptions()
    if browser == "firefox":
          browser_options = webdriver.FirefoxOptions()
    browser_options.add_argument('--headless')
    browser_options.add_argument('--window-size=1920x1080')
    browser_options.add_argument('--ignore-certificate-errors')
    browser_options.add_argument('--no-sandbox')
    browser_options.add_argument('--disable-dev-shm-usage')
    browser_options.add_argument(
        '--host-resolver-rules=MAP www.google-analytics.com 127.0.0.1')
    browser_options.add_argument(
        '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36')
    # browser_options.add_argument('no-default-browser-check')
    # browser_options.add_argument('no-first-run')
    # browser_options.add_argument("[path to the profile]")
    # browser_options.add_argument("disable-gpu")
    # browser_options.binary_location = "D:\apps\apps\chromedriver\current"
    return browser_options
# end get_browser_options()

def download_image(image_url, image_name):
    """
    Downloads the given image from the specified url and saves it in the 'data\images' folder with the given name.
    Returns the local path of the downloaded image.
    """
    try:
        response = requests.get(image_url)
        if not os.path.exists('./data/images'):
            os.makedirs('./data/images')
        image_path = f'./data/images/{image_name}'
        with open(image_path, 'wb') as f:
            f.write(response.content)
        return image_path
    except Exception as e:
        print(f"An error occurred while downloading image {image_name}. Error message: {e}")
        return None

def get_hd_image_url(image_url):
    """
    Attempts to get the high definition image url for the given image.
    Returns the hd image url if available, else returns the original image url.
    """
    query_params = ['?w=2000', '?w=1800', '?w=1480', '?w=1380']
    for param in query_params:
        hd_image_url = image_url + param
        response = requests.get(hd_image_url)
        if response.status_code == 200:
            return hd_image_url
    return image_url

def get_collection_data(collection_url):
    """
    Scrapes the webpage of the given collection url using Selenium.
    Returns a dictionary containing data for all images in the collection and metadata for the collection itself.
    """
    # Setting up Selenium driver
    driver = webdriver.Firefox()
    driver.get(collection_url)
    time.sleep(3)

    # Extracting collection metadata
    collection_id = collection_url.split('/')[-1]
    collection_title = driver.find_element(By.CSS_SELECTOR, 'h1.collection__title').text
    collection_description = driver.find_element(By.CSS_SELECTOR, '.collection__description-text').text
    total_images_text = driver.find_element(By.CSS_SELECTOR, '.collection__totalr').text
    total_images = int(''.join(filter(str.isdigit, total_images_text)))

    print('Collection from ' + str(total_images) + ' images')
    # Extracting data for each image in the collection
    images_data = []
    current_image = 0
    while len(images_data) < total_images:
        images = driver.find_elements(By.CSS_SELECTOR, '.showcase__item')
        for image in images:
            current_image = current_image + 1
            print('Start scraping image ' + str(current_image) + ' from ' + str(total_images))
            image_data = {}
            # Extracting image title and link to preview image
            image_title = image.get_attribute('data-title')
            image_preview_url = image.get_attribute('data-image')
            # Attempting to get hd image url and download the hd image
            image_hd_url = get_hd_image_url(image_preview_url)
            # print('IMG URL: ' + image_hd_url)
            # Extract image name from URL
            image_name = image_hd_url.split('/')[-1]
            # Remove query parameters from image name
            image_name = re.sub(r'\?.*', '', image_name)
            # Extract only the relevant part of the image name
            match = re.search(r'([-\d]+)\.(jpg|png)', image_name)
            if match:
                image_name = match.group(1) + '.' + match.group(2)
            else:
                print('Unable to extract image name from URL')
            # print('IMG name: ' + image_name)
            image_local_path = download_image(image_hd_url, image_name)
            if not image_local_path:
                # Fallback to original image url if hd url not available or download fails
                image_hd_url = image_preview_url
                image_name = image_hd_url.split('/')[-1]
                image_local_path = download_image(image_hd_url, image_name)
            # Extracting link to image page and image id
            image_link_to_page = image.find_element(By.TAG_NAME, 'a').get_attribute('href')
            image_link_to_page = image_link_to_page[:image_link_to_page.find('.htm')+4]
            # print(image_link_to_page)
            image_id = image.find_element(By.TAG_NAME, 'a').get_attribute('data-id')
            # Storing all image data in a dictionary
            image_data['image_title'] = image_title
            image_data['image_link'] = image_preview_url
            image_data['image_hd'] = image_hd_url
            image_data['image_hd_local'] = image_local_path
            image_data['link_to_image_page'] = image_link_to_page
            image_data['image_id'] = image_id
            # Storing the image data in a list
            images_data.append(image_data)
            print('Finish scraping image ' + str(current_image))

        # Checking if there are more pages and navigating to them if they exist
        print('Search Next Page Button')
        try:
          next_page_button = driver.find_element(By.CSS_SELECTOR, '.pagination__next')
        except:
          next_page_button = None

        if not next_page_button or not next_page_button.is_enabled():
          print('Next Page not found. Breaking')
          break
        else:
          print('Got to Next Page')
          try:
            button_accept_cookies = driver.find_element(By.ID, 'onetrust-accept-btn-handler')
            button_accept_cookies.click()
            time.sleep(2)
          except:
            print('Cookies button not found')
          next_page_button.click()
          time.sleep(5)
    # Closing Selenium driver
    driver.quit()

    # Creating dictionary with collection metadata and images data
    collection_data = {}
    collection_data['collection_id'] = collection_id
    collection_data['collection_url'] = collection_url
    collection_data['collection_title'] = collection_title
    collection_data['collection_description'] = collection_description
    collection_data['collection_size'] = total_images
    collection_data['images'] = images_data
    collection_data['created_at'] = datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')

    return collection_data

def save_to_json(data, file_name):
    """
    Saves the given dictionary as a JSON file in the 'data\json' folder with the given name.
    """
    try:
        if not os.path.exists('./data/json'):
            os.makedirs('./data/json')
        file_path = f'./data/json/{file_name}'
        with open(file_path, 'w') as f:
            json.dump(data, f, indent=4)
        print(f"The data has been saved to {file_path}")
    except Exception as e:
        print(f"An error occurred while saving the data to {file_name}. Error message: {e}")

# Example usage
collection_url = 'https://www.freepik.com/collection/psd-white-unbranded-smartphone-template-with-customizable-design-for-ui-ux-product-showcase-3d/4747261'
collection_data = get_collection_data(collection_url)
save_to_json(collection_data, f"{collection_data['collection_id']}.json")
