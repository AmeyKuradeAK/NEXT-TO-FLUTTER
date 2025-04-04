import requests

url = "http://localhost:5000/convert"
data = {"jsxCode": "<div><h1>Hello</h1><button>Click</button></div>"}

response = requests.post(url, json=data)
print(response.json())
