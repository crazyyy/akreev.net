import os
import re
import json
import time
from dotenv import load_dotenv
from scraper_helper import save_to_json, get_collection_data
from selenium import webdriver
from selenium.webdriver.common.by import By

# Load environment variables from .env file
load_dotenv()

collections_url = os.getenv("COLLECTIONS_URL")

data_directory = './data'
jsons_directory = data_directory + '/json'
imgs_directory = data_directory + '/images'

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

# Initialize WebDriver
driver = webdriver.Firefox(
    options=get_browser_options('firefox')
)
# Open gallery page
# ToDo: move argument to variable. Make variable load from DB
driver.get(collections_url)

# Loop over pages of collections
collection_data_list = []
next_page_button = True
while next_page_button:
    # Find all collection items and extract data
    print('Find all collection items and extract data')
    collection_blocks = driver.find_elements(By.CSS_SELECTOR, ".collections article.collection__item")
    for block in collection_blocks:
        collection_data = {}
        collection_id = block.get_attribute("data-id")
        print(collection_id)
        collection_data["collection_id"] = collection_id
        collection_size_str = block.find_element(By.CSS_SELECTOR, "span.count").text
        collection_size = int(re.sub("[^0-9]", "", collection_size_str))
        collection_data["collection_size"] = collection_size

        # Search for previous scraped files and check size of collection
        # file_path = f"data\json\{collection_id}.json"
        file_path = jsons_directory + '/' + collection_id + '.json'
        print(file_path)
        if os.path.isfile(file_path):
            with open(file_path, "r") as fp:
                data = json.load(fp)
            if data["collection_size"] >= collection_size:
                continue

        # Get collection URL
        collection_url = block.get_attribute("data-share-url")
        collection_data["collection_url"] = collection_url

        # Click on the "onetrust-accept-btn-handler" button if it exists
        try:
            accept_button = driver.find_element(By.ID, "onetrust-accept-btn-handler")
            accept_button.click()
        except:
            pass

        # Save screenshot and update preview link
        driver.execute_script("""var links = document.querySelectorAll('.collection__link, .image-wrapper');
                                  for (i = 0; i < links.length; i++) {
                                    links[i].style.borderRadius = '0';
                                  }""")
        image_wrapper = block.find_element(By.CSS_SELECTOR, ".image-wrapper")
        screenshot_filename = imgs_directory + '/' + collection_id + '-preview.png'
        image_wrapper.screenshot(screenshot_filename)
        collection_data["collection_preview"] = screenshot_filename

        # Save collection data to file and update with additional data if available
        collection_data = get_collection_data(collection_url, collection_data)
        save_to_json(collection_data, f"{collection_id}.json")

    # Move to next page of collection items
    try:
        next_page_button = driver.find_element(By.CSS_SELECTOR, ".pagination__next")
        next_page_button.click()
        time.sleep(2)  # Wait for new content to load
    except:
        next_page_button = None

# Close WebDriver
print("All done")
