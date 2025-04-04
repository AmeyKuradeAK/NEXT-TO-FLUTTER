import requests
import json

# Define API URL
API_URL = "http://localhost:5000/api/convert"

# Sample Next.js JSX/TSX Code
nextjs_code = """
function App() {
    return <div>Hello, World!</div>;
}
"""

# Prepare request payload
payload = {"nextjsCode": nextjs_code}

# Send POST request
response = requests.post(API_URL, json=payload)

# Print response
if response.status_code == 200:
    print("✅ API Response:")
    print(json.dumps(response.json(), indent=4))
else:
    print(f"❌ Error: {response.status_code}")
    print(response.text)
