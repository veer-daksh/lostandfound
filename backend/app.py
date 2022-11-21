from flask import Flask, render_template, request, jsonify,session, redirect
from functools import wraps
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS
import uuid
from passlib.hash import pbkdf2_sha256

app = Flask(__name__)
app.app_context().push()
app.secret_key = b'\xcc^\x91\xea\x17-\xd0W\x03\xa7\xf8J0\xac8\xc5'
client = MongoClient("mongodb://localhost:27017")
# db = client.lin_flask
db = client['reactflaskdb'] ## database name
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')



class User:

  def start_session(self, user):
    del user['password']
    session['logged_in'] = True
    session['user'] = user
    return jsonify(user), 200

  def signup(self):
    print(request.form)

    # Create the user object
    user = {
      "_id": uuid.uuid4().hex,
      "name": request.form.get('name'),
      "email": request.form.get('email'),
      "password": request.form.get('password')
    }

    # Encrypt the password
    user['password'] = pbkdf2_sha256.encrypt(user['password'])

    # Check for existing email address
    if db['login'].find_one({ "email": user['email'] }):
      return jsonify({ "error": "Email address already in use" }), 400

    if db['login'].insert_one(user):
      return self.start_session(user)

    return jsonify({ "error": "Signup failed" }), 400
  
  def signout(self):
    session.clear()
    return redirect('/')
  
  def login(self):

    user = db['login'].find_one({
      "email": request.form.get('email')
    })

    if user and pbkdf2_sha256.verify(request.form.get('password'), user['password']):
      return self.start_session(user)
    
    return jsonify({ "error": "Invalid login credentials" }), 401



@app.route('/login/signup', methods=['POST'])
def signup():
  return User().signup()

@app.route('/login/signout')
def signout():
  return User().signout()

@app.route('/login/login', methods=['POST'])
def login():
  return User().login()


def login_required(f):
  @wraps(f)
  def wrap(*args, **kwargs):
    if 'logged_in' in session:
      return f(*args, **kwargs)
    else:
      return redirect('/')
  
  return wrap





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