# Python Freepik scraper for WP

## Dev

```sh
python -m venv init
pip install -r requirements.txt

pip freeze > requirements.txt
```

## Scrape new gallery with images

```sh
python .\wp-content\plugins\freepik-scraper\python\scraper_main.py
```

## Post new galleries to WP

```sh
# make copy of .env and set new access data for user with permissions to only post new data (editor role)
cp .env-example .env

python .\wp-content\plugins\freepik-scraper\python\post_media_acf_2_wp.py
```
