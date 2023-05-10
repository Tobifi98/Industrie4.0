import requests

url = "http://10.3.0.71:8080/mhubx-cc/module/juwi/action?"
RESTparameters = {
    "page":"Logic.Interface",
    "name":"getMeasurement",
    "source":"system",
    "system_id":"cps1",
    "msm_id":"*"
}

AlarmParameters = {
    "page":"Logic.Interface",
    "name":"getAlarms",
    "source":"system",
    "system_id":"cps1",
    "msm_id":"*"
}

def getMeasurement():
    r = requests.get(url, params=RESTparameters, auth=('tester', 'training'))
    data = r.json()
    return data

def getAlarms():
    a =  requests.get(url, params=AlarmParameters, auth=('tester', 'training'))
    alarms = a.json()
    return alarms