from flask import Flask
from firebase_config import firebase

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/test_push/')
def test_push():
    return