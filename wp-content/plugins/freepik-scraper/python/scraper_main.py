import os
from PIL import Image
import re
import json
from scraper import save_to_json, get_collection_data
# from "wp-content.plugins.freepik-scraper.python.scraper" import save_to_json, get_collection_data
from selenium import webdriver
from selenium.webdriver.common.by import By

# Step 1
driver = webdriver.Firefox()

# Step 2
driver.get("https://www.freepik.com/author/dmitryakreev/collections")

# Step 3-4
collection_data_list = []
next_page_button = True
while next_page_button:
    collection_blocks = driver.find_elements(By.CSS_SELECTOR, ".collections article.collection__item")
    for block in collection_blocks:
        collection_data = {}
        collection_id = block.get_attribute("data-id")
        collection_data["collection_id"] = collection_id
        collection_size_str = block.find_element(By.CSS_SELECTOR, "span.count").text
        collection_size = int(re.sub("[^0-9]", "", collection_size_str))
        collection_data["collection_size"] = collection_size

        # Step 6
        file_path = f"data\json\{collection_id}.json"
        if os.path.isfile(file_path):
            with open(file_path, "r") as fp:
                data = json.load(fp)
            if data["collection_size"] >= collection_size:
                continue

        # Step 7
        collection_url = block.get_attribute("data-share-url")
        collection_data["collection_url"] = collection_url

        # Step 8
        driver.execute_script("""var links = document.querySelectorAll('.collection__link, .image-wrapper');
                                  for (i = 0; i < links.length; i++) {
                                    links[i].style.borderRadius = '0';
                                  }""")
        image_wrapper = block.find_element(By.CSS_SELECTOR, ".image-wrapper")
        screenshot_filename = f"data\images\{collection_id}-preview.png"
        image_wrapper.screenshot(screenshot_filename)
        collection_data["collection_preview"] = screenshot_filename

        # Step 9-11
        collection_data = get_collection_data(collection_url, collection_data)
        save_to_json(collection_data, f"{collection_id}.json")

    try:
        next_page_button = driver.find_element(By.CSS_SELECTOR, ".pagination__next")
        next_page_button.click()
    except:
        next_page_button = None

# Step 12
print("All done")
