import requests

url = "http://10.3.0.71:8080/mhubx-cc/module/juwi/action?"
parameters = {
    "page":"Logic.Interface",
    "name":"getMeasurement",
    "source":"system",
    "system_id":"cps1",
    "msm_id":"*"
}


r = requests.get(url, params=parameters, auth=('tester', 'training'))
print(r)
print(r.text)