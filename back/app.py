from flask import Flask, jsonify, request, jsonify, json
from flask_sqlalchemy import SQLAlchemy 
from config import DBConfig 

from datetime import datetime

from flask_cors import CORS 
from flask_bcrypt import Bcrypt 
from flask_jwt_extended import JWTManager, create_access_token


app = Flask(__name__)
app.config.from_object(DBConfig)
db = SQLAlchemy(app)

bcrypt = Bcrypt(app)
jwt = JWTManager(app)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return "Hello World with Flask + Gunicorn + Docker!"


@app.route('/users/register', methods=['POST'])
def register():
    cur = db.engine.raw_connection().cursor()
    print(cur)
    first_name = request.get_json()['first_name']
    last_name = request.get_json()['last_name']
    username = request.get_json()['email']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    created = datetime.utcnow()

    cur.execute("INSERT INTO fr_auth_db.users (first_name, last_name, username, password, created) VALUES (" +
    "'" + str(first_name) + "', "+
    "'" + str(last_name) + "' ," +
    "'" + str(username) + "' ," +
    "'" + str(password) + "' ," +
    "'" + str(created) + "')")

    cur.connection.commit()

    result = {
        "first_name": first_name, 
        "last_name": last_name, 
        "username": username, 
        "password": password, 
        "created": created 
    }

    return jsonify({"result": result})


@app.route('/users/login', methods=['POST'])
def login():
    cur = db.engine.raw_connection().cursor()

    email = request.get_json()['email']
    password = request.get_json()['password']
    result = "" 

    cur.execute("SELECT * FROM users where email='"+str(email)+"'")
    rs = cur.fetchone()

    if bcrypt.check_password_hash(rs['password'], password):
        access_token = create_access_token(identity={
            'first_name': rs['first_name'],
            'last_name': rs['last_name'],
            'email': rs['email'],
        })
        result = jsonify({"token": access_token})
    else:
        result = jsonify({'error', 'Invalid username and password'})

    return result 

if __name__ == '__main__':
    app.run(debug=True)
