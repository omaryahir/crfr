# crfr
crfr - prototype

## Stack Tech:
- Flask
- PostgreSQL
- Docker Compose 
- React


## How to run project:
1. Navigate to deployment
1. Create .env file inside deployment folder with this content:
    ```
    PG_USER=admin
    PG_PASSWORD=123
    BACKEND_PORT=8080
    ```
1. Run this command:
    `$ docker-compose up --build`
1. Wait a couple of minutes :) 
1. Open your web browser and use this url:
    http://127.0.0.1:8080


## Connect to the test database in your local using psql:
1. Navigate to the container:
    `$ docker exec -ti docker_fr_auth_db_1 bas`
1. Connect to postgres using psql:
    `psql "dbname=fr_auth_db host=localhost user=admin password=123 port=5432"`

## Notes:
- Use this to describe a table: 
    `\d fr_auth_db.users` 
- Remember to include the schema in the queries: 
    `select * from fr_auth_db.users`

## Debug:
If you want to load the flask project for debug purposes you can:
1. Navigate to back folder.
1. Run this command:
    `$ python3 -m venv env`
1. Install the dependencies:
    `$ source env/bin/activate`
    `$ pip install -r requirements.txt`
1. Run the project 
    `$ python app.py`

If you are interested debuging with VSCode that is really interesting check this website:
https://code.visualstudio.com/docs/python/tutorial-flask


## React App

In order to work with the front end navigate to `front` folder and you will be able to use npm start. 

Note: Consider this project has been made using
```
$ npm init react-app client
$ npm i axios jwt-decode react-router-dom 
```




