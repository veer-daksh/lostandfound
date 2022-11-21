from flask import Flask
from app import app
from user.models import User

@app.route('/login/signup', methods=['POST'])
def signup():
  return User().signup()

@app.route('/login/signout')
def signout():
  return User().signout()

@app.route('/login/login', methods=['POST'])
def login():
  return User().login()