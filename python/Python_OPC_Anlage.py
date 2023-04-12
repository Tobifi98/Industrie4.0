from opcua import Client

# specify the URL of the OPC server
Controller_URL = "opc.tcp://192.168.0.200:4840"
PL_URL = "opc.tcp://192.168.0.2:4840"
RL_URL = "opc.tcp://192.168.0.10:4840"
HL_URL = "opc.tcp://192.168.0.20:4840"
PR_URL = "opc.tcp://192.168.0.30:4840"
BF_URL = "opc.tcp://192.168.0.40:4840"

# create a client object and connect to the server
client = Client(Controller_URL)
client.connect()

# specify the Node ID or Browse Path of the station node
station_node = client.get_node("ns=2;s=MyStation")

# retrieve a node using a Browse Path
browse_path = ["MyFolder", "MyStation"]
station_node2 = client.get_node(browse_path)

# retrieve the current value of the station node
station_value = station_node.get_value()

# print the value
print("Value of station node: ", station_value)

# disconnect from the server
client.disconnect()