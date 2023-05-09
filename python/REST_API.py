import requests

url = "http://10.3.0.71:8080/mhubx-cc/module/juwi/action?"
parameters = {
    "page":"Logic.Interface",
    "name":"getMeasurement",
    "source":"system",
    "system_id":"cps1",
    "msm_id":"*"
}

def getMeasurement():
    r = requests.get(url, params=parameters, auth=('tester', 'training'))
    data = r.json()
    return data