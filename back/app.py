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

    payload = request.get_json()

    first_name = payload['first_name']
    last_name = payload['last_name']
    username = payload['username']
    password = bcrypt.generate_password_hash(payload['password']).decode('utf-8')
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

    print("OK OK ")
    if request.authorization is not None: 
        username = request.authorization['username']
        password = request.authorization['password']
        result = "" 

        sql = """
        SELECT first_name, last_name, username, password FROM fr_auth_db.users where username='%s'
        """ % username
        cur.execute(sql)
        rs = cur.fetchone() 

        # 0 - first_name, 1 - last_name, 2 - username, 3 - password 
        print("SQL --> %s" % sql)
        if bcrypt.check_password_hash(rs[3], password):
            access_token = create_access_token(identity={
                'first_name': rs[0],
                'last_name': rs[1],
                'username': rs[2],
            })
            result = jsonify({"token": access_token})
        else:
            result = jsonify({'error': 'Invalid username and password'})
    else: 
        result = jsonify({'error': 'Headers must be via authorization section'})

    return result 


if __name__ == '__main__':
    app.run(debug=True)
