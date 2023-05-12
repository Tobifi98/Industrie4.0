from flask import Flask, make_response
from flask.json import jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import json
import pandas as pd
import ast
import REST_API
import Python_MQTT
app = Flask(__name__)
api = Api(app)
CORS(app)

class restData(Resource):
    # methods go here
    pass
    def get(self):
        data = REST_API.getMeasurement()
        return jsonify({'data': data}, 200)  # return data and 200 OK code
    
    def post(self):
        parser = reqparse.RequestParser()  # initialize
        
        parser.add_argument('userId', required=True)  # add args
        parser.add_argument('name', required=True)
        parser.add_argument('city', required=True)
        
        args = parser.parse_args()  # parse arguments to dictionary
        
        # read our CSV
        data = pd.read_csv('users.csv')

        if args['userId'] in list(data['userId']):
            return {
                'message': f"'{args['userId']}' already exists."
            }, 401
        else:
            # create new dataframe containing new values
            new_data = pd.DataFrame({
                'userId': args['userId'],
                'name': args['name'],
                'city': args['city'],
                'locations': [[]]
            })
            # add the newly provided values
            data = data.append(new_data, ignore_index=True)
            data.to_csv('users.csv', index=False)  # save back to CSV
            return {'data': data.to_dict()}, 200  # return data with 200 OK
        
    def put(self):
        parser = reqparse.RequestParser()  # initialize
        parser.add_argument('userId', required=True)  # add args
        parser.add_argument('location', required=True)
        args = parser.parse_args()  # parse arguments to dictionary

        # read our CSV
        data = pd.read_csv('users.csv')
        
        if args['userId'] in list(data['userId']):
            # evaluate strings of lists to lists
            data['locations'] = data['locations'].apply(
                lambda x: ast.literal_eval(x)
            )
            # select our user
            user_data = data[data['userId'] == args['userId']]

            # update user's locations
            user_data['locations'] = user_data['locations'].values[0] \
                .append(args['location'])
            
            # save back to CSV
            data.to_csv('users.csv', index=False)
            # return data and 200 OK
            return {'data': data.to_dict()}, 200

        else:
            # otherwise the userId does not exist
            return {
                'message': f"'{args['userId']}' user not found."
            }, 404
    
    def delete(self):
        parser = reqparse.RequestParser()  # initialize
        parser.add_argument('userId', required=True)  # add userId arg
        args = parser.parse_args()  # parse arguments to dictionary
        
        # read our CSV
        data = pd.read_csv('users.csv')
        
        if args['userId'] in list(data['userId']):
            # remove data entry matching given userId
            data = data[data['userId'] != args['userId']]
            
            # save back to CSV
            data.to_csv('users.csv', index=False)
            # return data and 200 OK
            return {'data': data.to_dict()}, 200
        else:
            # otherwise we return 404 because userId does not exist
            return {
                'message': f"'{args['userId']}' user not found."
            }, 404

class Alarms(Resource):
    # methods go here
    pass
    def get(self):
        data = REST_API.getAlarms()
        return jsonify({'data': data}, 200)  # return data and 200 OK code
    
class mqttData(Resource):
    # methods go here
    pass
    def get(self):
        data = Python_MQTT.run()
        return jsonify({'data': data}, 200)  # return data and 200 OK code

api.add_resource(restData, '/restData')  # '/restData' is our entry point
api.add_resource(Alarms, '/getAlarms')  # '/getAlarms' is our entry point
api.add_resource(mqttData, '/mqttData')  # '/mqttData' is our entry point

if __name__ == '__main__':
    app.run()  # run our Flask app