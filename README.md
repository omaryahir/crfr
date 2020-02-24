# crfr
crfr - prototype

Technologies:
- Flask
- PostgreSQL
- Docker Compose 
- React


Run project:
1. Navigate to deployment
1. Create .env file inside deployment folder with this content:
    ```
    PG_USER=admin
    PG_PASSWORD=123
    BACKEND_PORT=8080
    ```
1. Run this command:
    `$ docker-compose up --build`


Connect to the test database in your local using psql:
1. Navigate to the container:
    `$ docker exec -ti docker_fr_auth_db_1 bas`
1. Connect to postgres using psql:
    `psql "dbname=fr_auth_db host=localhost user=admin password=123 port=5432"`

Notes:
- Use this to describe a table: 
    `\d fr_auth_db.users` 
- Remember to include the schema in the queries: 
    `select * from fr_auth_db.users`


Debug:
If you want to load the flask project for debug purposes you can:
1. Navigate to back folder.
1. Run this command:
    `$ python3 -m venv env`
1. Install the dependencies:
    `$ source env/bin/activate`
    `$ pip install -r requirements.txt`
1. Run the project 
    `$ python app.py`

    
