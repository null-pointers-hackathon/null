import requests

url = "http://localhost:5001/api/v1/predict"
data = {
    "N": 90,
    "P": 42,
    "K": 43,
    "temperature": 20.87,
    "humidity": 82.00,
    "ph": 6.5,
    "rainfall": 202.93
}

response = requests.post(url, json=data)
print(response.json()) 