from flask import Flask
from pymongo import MongoClient
from os import environ

app = Flask(__name__, static_url_path='/build')
client = MongoClient(environ['MONGODB_URI'])
db = client['development']
private_key = environ['JWT_PRIVATE']