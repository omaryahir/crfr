# crfr
crfr - prototype

Technologies:
- React
- Flask
- PostgreSQL
- Docker Compose 


Run project:
1. Navigate to docker
1. Run this command:
    `$ docker-compose up`


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
- 
    
