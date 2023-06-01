#!/bin/bash

# Step 1: Change directory to ~/public_html/
cd ~/public_html/

# Step 2: Run scraper_main.py and log the output
echo "----- $(date) -----" >> ~/public_html/freepik-scraper.log
echo "Check for new Galleries" >> ~/public_html/freepik-scraper.log
python ./wp-content/plugins/freepik-scraper/python/scraper_main.py >> ~/public_html/freepik-scraper.log

# Step 3: Run post_media_acf_2_wp.py and log the output
echo "----- $(date) -----" >> ~/public_html/freepik-scraper.log
echo "Publish unpublished galleries" >> ~/public_html/freepik-scraper.log
python ./wp-content/plugins/freepik-scraper/python/post_media_acf_2_wp.py >> ~/public_html/freepik-scraper.log

