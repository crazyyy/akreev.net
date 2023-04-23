def get_collection_data(collection_url):
    """
    Scrapes the webpage of the given collection url using Selenium.
    Returns a dictionary containing data for all images in the collection and metadata for the collection itself.
    """
    # Setting up Selenium driver
    driver = webdriver.Firefox()
    driver.get(collection_url)

    # Extracting collection metadata
    collection_id = collection_url.split('/')[-1]
    collection_title = driver.find_element(By.CSS_SELECTOR, 'h1.collection__title').text
    collection_description = driver.find_element(By.CSS_SELECTOR, '.collection__description-text').text
    total_images_text = driver.find_element(By.CSS_SELECTOR, '.collection__totalr').text
    total_images = int(''.join(filter(str.isdigit, total_images_text)))

    # Extracting data for each image in the collection
    images_data = []
    while len(images_data) < total_images:
        images = driver.find_elements(By.CSS_SELECTOR, '.showcase__item')
        for image in images:
            image_data = {}
            # Extracting image title and link to preview image
            image_title = image.get_attribute('data-title')
            image_preview_url = image.get_attribute('data-image')

        # Checking if there are more pages and navigating to them if they exist
        print('Search Next Page Button')
        pagination_button = driver.find_element(By.CSS_SELECTOR, '.pagination__button')
        pagination_button_title = pagination_button.find_element(By.TAG_NAME, 'span').text
        next_page_button = None
        if pagination_button_title == 'Next Page':
          print('Next Page Button found')
          next_page_button = pagination_button
          break
        if not next_page_button or not next_page_button.is_enabled():
            break
        else:
            next_page_button.click()
    # Closing Selenium driver
    driver.quit()






import os
import time
import json
import requests
from selenium import webdriver


# Set Firefox preferences to automatically download images
fp = webdriver.FirefoxProfile()
fp.set_preference("browser.download.folderList", 2)
fp.set_preference("browser.download.manager.showWhenStarting", False)
fp.set_preference("browser.download.dir", os.path.join(os.getcwd(), "data", "images"))
fp.set_preference("browser.helperApps.neverAsk.saveToDisk", "image/jpeg,image/png,image/webp")


# Define a function to return the HD image URL with the largest possible size
def get_largest_image_url(url):
    possible_sizes = ["?w=2000", "?w=1800", "?w=1480", "?w=1380"]
    for size in possible_sizes:
        hd_url = url + size
        response = requests.get(hd_url)
        if response.status_code == 200:
            return hd_url
    return url


# Define a function to extract information about each image and add it to the collection object
def extract_image_info(image):
    image_data = {}

    # Extract image title and URL
    image_data["image_title"] = image.get_attribute("data-title")
    image_data["image_link"] = image.get_attribute("data-image")

    # Get HD image URL and download the image
    image_data["image_hd"] = get_largest_image_url(image_data["image_link"])
    local_path = requests.get(image_data["image_hd"]).url.split("/")[-1]
    image_data["image_hd_local"] = os.path.join("data", "images", local_path)

    # Find and extract image metadata
    image_metadata = image.find_element_by_css_selector(".showcase__metadata")
    image_data["link_to_image_page"] = image_metadata.find_element_by_tag_name("a").get_attribute("href")
    image_data["image_id"] = image_metadata.find_element_by_tag_name("a").get_attribute("data-id")
    image_data["image_alt"] = image_metadata.find_element_by_tag_name("img").get_attribute("alt")

    return image_data


# Navigate through all pages, extract information about the collection, and download each image
def main(url):
    # Initialize driver and open page
    driver = webdriver.Firefox(firefox_profile=fp)
    driver.get(url)

    # Initialize collection data
    collection_data = {}
    collection_data["collection_id"] = url.split("/")[-1]
    collection_data["collection_url"] = url

    # Extract collection title and description
    collection_data["collection_title"] = driver.find_element_by_css_selector(".collection__title").text
    collection_data["collection_description"] = driver.find_element_by_css_selector(".collection__description-text").text

    # Extract number of images in the collection
    collection_data["collection_size"] = int(''.join(filter(str.isdigit, driver.find_element_by_css_selector(".collection__total").text)))

    # Extract image information from all pages of the collection
    images = driver.find_elements_by_css_selector(".showcase__item")
    for image in images:
        image_data = extract_image_info(image)
        collection_data[image_data["image_id"]] = image_data

    # Check if there are more pages and navigate to them
    while True:
        try:
            next_button = driver.find_element_by_css_selector(".pagination__button--next")
            next_button.click()
            time.sleep(5)
            images = driver.find_elements_by_css_selector(".showcase__item")
            for image in images:
                image_data = extract_image_info(image)
                collection_data[image_data["image_id"]] = image_data
        except:
            break

    # Add creation date/time to collection data and write to JSON file
    collection_data["created"] = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())



=====================================================
=====================================================
=====================================================
=====================================================


import time
import requests
from bs4 import BeautifulSoup
from selenium import webdriver

# Функція для отримання URL зображення найвищої якості
def get_highest_resolution_image_url(url):
    res_sizes = [2000, 1800, 1480, 1380]
    for size in res_sizes:
        test_url = url + "?w=" + str(size)
        response = requests.head(test_url)
        if response.status_code == 200:
            return test_url
    return url

# Запускаємо драйвер Firefox
driver = webdriver.Firefox()

# URL сторінки колекції, яку ми хочемо скопіювати
collection_url = "https://www.freepik.com/collection/psd-white-unbranded-smartphone-template-with-customizable-design-for-ui-ux-product-showcase-3d/4747261"

# Отримуємо ID колекції з URL
collection_id = collection_url.split("/")[-1]

# Створюємо об'єкт даних колекції
collection_data = {
    "collection_id": collection_id,
    "collection_url": collection_url,
    "collection_title": "",
    "collection_description": "",
    "collection_size": 0,
    "image_links": []
}

# Відкриваємо сторінку колекції
driver.get(collection_url)

# Отримуємо назву колекції
collection_title = driver.find_element_by_css_selector("h1.collection__title").text
collection_data["collection_title"] = collection_title

# Отримуємо опис колекції та кількість зображень
collection_description = driver.find_element_by_css_selector("p.collection__description-text").text
collection_size = driver.find_element_by_css_selector(".collection__total").text
collection_size = int(''.join(filter(str.isdigit, collection_size)))
collection_data["collection_description"] = collection_description
collection_data["collection_size"] = collection_size

# Отримуємо посилання на всі зображення
while True:
    # Отримуємо посилання на кожне зображення
    images = driver.find_elements_by_css_selector(".list-content figure.showcase__item")
    for image in images:
        # Отримуємо назву та URL зображення
        image_title = image.get_attribute("data-title")
        image_url = image.get_attribute("data-image")

        # Отримуємо URL зображення найвищої якості
        highest_resolution_image_url = get_highest_resolution_image_url(image_url)

        # Додаємо дані зображення до об'єкту даних колекції
        collection
