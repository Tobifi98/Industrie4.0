import random
import time
from paho.mqtt import client as mqtt_client
import json

broker = 'test.mosquitto.org' #'kruepv.gibip.de'
port = 1883 #11883
topic = [("Industrie4/Palettenlager/#",1),("Industrie4/Farbsensor/#",1)]
# generate client ID with pub prefix randomly
client_id = f'python-mqtt-{random.randint(0, 100)}'
data = {}
values = {}

def connect_mqtt() -> mqtt_client:
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Connected to MQTT Broker!")
        else:
            print("Failed to connect, return code %d\n", rc)

    client = mqtt_client.Client(client_id)
    #client.username_pw_set(username, password)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client

def subscribe(client: mqtt_client):
    def on_message(client, userdata, msg):
        print(f"Received `{msg.payload.decode()}` from `{msg.topic}` topic `{msg.qos}` qos")
        node = msg.topic
        node = node.split('/', 4)
        keyVal = node[-1]

        try:
            values[keyVal].append(keyVal, msg.payload.decode())
        except:
            values[keyVal] = [keyVal, msg.payload.decode()]

        node = node[-2]
        try:
            data[node].append(values[keyVal])
        except:
            data[node] = [values[keyVal]]
        

    client.subscribe(topic)
    client.on_message = on_message

def run():
    client = connect_mqtt()
    subscribe(client)
    client.loop_start()
    time.sleep(10)   
    client.disconnect()
    client.loop_stop()
    print(data)
    return data

if __name__ == '__main__':
    run()