import random
import time
from paho.mqtt import client as mqtt_client

broker = 'kruepv.gibip.de'
port = 11883
topic = [("pv/QPIGS/status/ac_input_voltage/#",1),("pv/QPIGS/status/ac_output_apparent_power/#",1)]
# generate client ID with pub prefix randomly
client_id = f'python-mqtt-{random.randint(0, 100)}'
data = {}

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
        node = node[-2]
        try:
            data[node].append(msg.payload.decode())
        except:
            data[node] = [msg.payload.decode()]
        

    client.subscribe(topic)
    client.on_message = on_message

def run():
    client = connect_mqtt()
    subscribe(client)
    client.loop_start()
    time.sleep(30)   
    client.disconnect()
    client.loop_stop()
    return data

if __name__ == '__main__':
    run()
