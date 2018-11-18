from flask import Flask
from flask import request
from flask import jsonify
from firebase_config import firebase
from requests.exceptions import HTTPError

db = firebase.database()
auth = firebase.auth()

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/hello/<name>', methods=['GET', 'POST'])
def hello_name(name=None):
    return 'Hello, %s' % name

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        try:
            user_data = auth.sign_in_with_email_and_password(email, password)
        except HTTPError as e:
            user_data = {'localID': ''}
        return jsonify(user_data)

@app.route('/user_info', methods=['POST'])
def user_info():
    if request.method == 'POST':
        user_id = request.form['localID']
        user_info = db.child('users').child(user_id).get()
        return jsonify(user_info.val())

@app.route('/make_post_image', methods=['POST'])
def make_post():
    if request.method == 'POST':
        media = 

@app.route('/make_post_video', methods=['POST'])


@app.route('/post_comment', methods=['POST'])
def post_comment():
    if request.method == 'POST':
        comment_text = request.form['comment_text']
        timestamp = request.form['timestamp']
        user_id = request.form['localID']
