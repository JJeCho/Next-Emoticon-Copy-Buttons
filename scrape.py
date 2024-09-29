import requests
from bs4 import BeautifulSoup
import json
import html

url = "https://kaomoji.ru/en/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
response = requests.get(url, headers=headers)

if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')

    kaomoji_data = {}

    # Find all h3 tags (categories)
    categories = soup.find_all('h3')

    for category in categories:
        category_name = category.text.strip()
        # Find the next table with class 'table_kaomoji' after the h3 tag
        table = category.find_next('table', class_='table_kaomoji')
        if table:
            kaomojis = []
            for row in table.find_all('tr'):
                for data in row.find_all('td'):
                    kaomoji_span = data.find('span')
                    if kaomoji_span:
                        kaomoji_text = html.unescape(kaomoji_span.text.strip())
                        kaomojis.append(kaomoji_text)
            kaomoji_data[category_name] = kaomojis

    # Save the data to a JSON file
    with open('kaomoji.json', 'w', encoding='utf-8') as json_file:
        json.dump(kaomoji_data, json_file, ensure_ascii=False, indent=4)

    print("Kaomoji data saved to kaomoji.json")
else:
    print(f"Failed to retrieve webpage. Status code: {response.status_code}")
