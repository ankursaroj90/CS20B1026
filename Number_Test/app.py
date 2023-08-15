from quart import Quart, request, jsonify
import asyncio
import requests

app = Quart(__name__)

async def fetch_url(url):
    try:
        response = await asyncio.to_thread(requests.get, url, timeout=0.5)
        if response.status_code == 200:
            return response.json().get("numbers", [])
    except (requests.exceptions.RequestException, asyncio.TimeoutError):
        pass
    return []

async def retrieve_numbers(urls):
    tasks = [fetch_url(url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

@app.route('/numbers', methods=['GET'])
async def get_numbers():
    urls = request.args.getlist('url')
    
    results = await retrieve_numbers(urls)
    
    merged_numbers = sorted(list(set(number for sublist in results for number in sublist)))
    
    return jsonify({"numbers": merged_numbers})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8008)
