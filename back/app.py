
# app.py 

from flask import Flask
from flask import request
from flask_sqlalchemy import SQLAlchemy 
from config import BaseConfig 


app = Flask(__name__)

@app.route('/', methods=['GET', 'POST']
def index():
    if request.method == 'GET':
        return "Hello World"

if __name__ == '__main__':
    app.run()


