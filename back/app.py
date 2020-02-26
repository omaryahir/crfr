from flask import Flask, jsonify, request, jsonify
from flask_sqlalchemy import SQLAlchemy 
from config import BaseConfig 

app = Flask(__name__)
app.config.from_object(BaseConfig)
db = SQLAlchemy(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return "Hello World with Flask + Gunicorn + Docker!"

if __name__ == '__main__':
    app.run()
