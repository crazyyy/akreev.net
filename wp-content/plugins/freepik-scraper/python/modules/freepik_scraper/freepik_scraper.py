from selenium import webdriver
from selenium.webdriver.firefox.options import Options


options = Options()
options.headless = True
options.add_argument('--headless=new')


driver = webdriver.Firefox(options=options)
driver.get('https://www.freepik.com/collection/psd-white-unbranded-smartphone-template-with-customizable-design-for-ui-ux-product-showcase-3d/4747261')


print(driver.title)


driver.quit()



def save_image(url, path):
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(path, 'wb') as f:
            for chunk in response:
                f.write(chunk)


def save_data(data, path):
    with open(path, 'w') as f:
        json.dump(data, f)


def scrape_page(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # get page title
    title = soup.find('h1', class_='title').text.strip()

    # get image links
    image_links = []
    for img in soup.find_all('img', class_='lazyload'):
        image_links.append(img['data-src'])

    # save images and get image filenames
    image_filenames = []
    for link in image_links:
        filename = os.path.basename(link)
        image_path = os.path.join('data', 'images', filename)
        save_image(link, image_path)
        image_filenames.append(filename)

    # save data as JSON
    data = {'title': title, 'image_filenames': image_filenames}
    data_path = os.path.join('data', 'DB', f'{title}.json')
    save_data(data, data_path)
