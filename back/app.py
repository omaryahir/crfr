
# app.py 

from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return "Hello World with Flask + Gunicorn + Docker!"

if __name__ == '__main__':
    app.run()


