from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.app_context().push()
client = MongoClient("mongodb://localhost:27017")
# db = client.lin_flask
db = client['reactflaskdb'] ## database name
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/users', methods=['POST', 'GET'])
def data():
    
    # POST a data to database
    if request.method == 'POST':
        body = request.json
        tag=body['tag']
        name=body['name']
        location=body['location']
        brand=body['brand']
        color=body['color']
        description=body['description']
        # firstName = body['firstName']
        # lastName = body['lastName']
        # emailId = body['emailId'] 
        # db.users.insert_one({
        db['users'].insert_one({
            "tag":tag,
            "name":name,
            "location":location,
            "brand":brand,
            "color":color,
            "description":description
            # "firstName": firstName,
            # "lastName": lastName,
            # "emailId":emailId
        })
        return jsonify({
            'status': 'Data is posted to MongoDB!',
            'tag':tag,
            'name':name,
            'location':location,
            'brand':brand,
            'color':color,
            'description':description
            # 'firstName': firstName,
            # 'lastName': lastName,
            # 'emailId':emailId
        })
        # GET all data from database
    if request.method == 'GET':
        allData = db['users'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            tag=data['tag']
            name=data['name']
            location=data['location']
            brand=data['brand']
            color=data['color']
            description=data['description']
            # firstName = data['firstName']
            # lastName = data['lastName']
            # emailId = data['emailId']
            dataDict = {
                'id': str(id),
                'tag':tag,
                'name':name,
                'location':location,
                'brand':brand,
                'color':color,
                'description':description
                # 'firstName': firstName,
                # 'lastName': lastName,
                # 'emailId': emailId
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)
 


@app.route('/login', methods=['POST', 'GET'])
def logindata():
    
    # POST a data to database
    if request.method == 'POST':
        body = request.json
        
        name=body['name']
        emailId = body['emailId']
        # location=body['location']
        # brand=body['brand']
        # color=body['color']
        # description=body['description']
        # firstName = body['firstName']
        # lastName = body['lastName']
         
        # db.users.insert_one({
        db['login'].insert_one({
            # "tag":tag,
            "name":name,
            # "location":location,
            # "brand":brand,
            # "color":color,
            # "description":description
            # "firstName": firstName,
            # "lastName": lastName,
            "emailId":emailId
        })
        return jsonify({
            'status': 'Data is posted to MongoDB!',
            # 'tag':tag,
            'name':name,
            # 'location':location,
            # 'brand':brand,
            # 'color':color,
            # 'description':description
            # 'firstName': firstName,
            # 'lastName': lastName,
            'emailId':emailId
        })
        # GET all data from database
    if request.method == 'GET':
        allData = db['login'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            # tag=data['tag']
            name=data['name']
            # location=data['location']
            # brand=data['brand']
            # color=data['color']
            # description=data['description']
            # firstName = data['firstName']
            # lastName = data['lastName']
            emailId = data['emailId']
            dataDict = {
                'id': str(id),
                # 'tag':tag,
                'name':name,
                # 'location':location,
                # 'brand':brand,
                # 'color':color,
                # 'description':description
                # 'firstName': firstName,
                # 'lastName': lastName,
                'emailId': emailId
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)
 
    
@app.route('/found', methods=['POST', 'GET'])
def ddata():
    
    # POST a data to database
    if request.method == 'POST':
        body = request.json
        tag=body['tag']
        name=body['name']
        location=body['location']
        brand=body['brand']
        color=body['color']
        description=body['description']
        # firstName = body['firstName']
        # lastName = body['lastName']
        # emailId = body['emailId'] 
        # db.users.insert_one({
        db['users'].insert_one({
            "tag":tag,
            "name":name,
            "location":location,
            "brand":brand,
            "color":color,
            "description":description
            # "firstName": firstName,
            # "lastName": lastName,
            # "emailId":emailId
        })
        return jsonify({
            'status': 'Data is posted to MongoDB!',
            'tag':tag,
            'name':name,
            'location':location,
            'brand':brand,
            'color':color,
            'description':description
            # 'firstName': firstName,
            # 'lastName': lastName,
            # 'emailId':emailId
        })
        # GET all data from database
    if request.method == 'GET':
        allData = db['users'].find()
        dataJson = []
        for data in allData:
            id = data['_id']
            tag=data['tag']
            name=data['name']
            location=data['location']
            brand=data['brand']
            color=data['color']
            description=data['description']
            # firstName = data['firstName']
            # lastName = data['lastName']
            # emailId = data['emailId']
            dataDict = {
                'id': str(id),
                'tag':tag,
                'name':name,
                'location':location,
                'brand':brand,
                'color':color,
                'description':description
                # 'firstName': firstName,
                # 'lastName': lastName,
                # 'emailId': emailId
            }
            dataJson.append(dataDict)
        print(dataJson)
        return jsonify(dataJson)




@app.route('/users/<string:id>', methods=['GET', 'DELETE', 'PUT'])
def onedata(id):
 
    # GET a specific data by id
    if request.method == 'GET':
        data = db['users'].find_one({'_id': ObjectId(id)})
        id = data['_id']
        tag=data['tag']
        name=data['name']
        location=data['location']
        brand=data['brand']
        color=data['color']
        description=data['description']
        # firstName = data['firstName']
        # lastName = data['lastName']
        # emailId = data['emailId']
        dataDict = {
            'id': str(id),
            'tag':tag,
            'name':name,
            'location':location,
            'brand':brand,
            'color':color,
            'description':description
            # 'firstName': firstName,
            # 'lastName': lastName,
            # 'emailId':emailId
        }
        print(dataDict)
        return jsonify(dataDict)
        
    # DELETE a data
    if request.method == 'DELETE':
        db['users'].delete_many({'_id': ObjectId(id)})
        print('\n # Deletion successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is deleted!'})
 
    # UPDATE a data by id
    if request.method == 'PUT':
        body = request.json
        tag=body['tag']
        name=body['name']
        location=body['location']
        brand=body['brand']
        color=body['body']
        description=body['description']
        # firstName = body['firstName']
        # lastName = body['lastName']
        # emailId = body['emailId']

        db['users'].update_one(
            {'_id': ObjectId(id)},
            {
                "$set": {
                    "tag":tag,
                    "name":name,
                    "location":location,
                    "brand":brand,
                    "color":color,
                    "description":description
                    # "firstName":firstName,
                    # "lastName":lastName,
                    # "emailId": emailId
                }
            }
        )
 
        print('\n # Update successful # \n')
        return jsonify({'status': 'Data id: ' + id + ' is updated!'})

if __name__ == '__main__':
    app.debug = True
    app.run()