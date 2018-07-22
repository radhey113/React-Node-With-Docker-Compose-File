### Node JS and React JS Project With Docker Compose File

##### Pre-Requisite
- Install Docker with docker-compose version >= 3.2 (Recommended version 3.2)
     - [Install Docker](https://www.docker.com/)
     - [Install Docker Compose](https://docs.docker.com/compose/install/)
- Install Node version >= 8
     - [Install Nodejs](https://nodejs.org/en/)
- Install Mongodb version >= 3.4
     - [Install Mongodb for Ubuntu](https://docs.mongodb.com/tutorials/install-mongodb-on-ubuntu/)
     -  [Install Mongodb for OSX](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
     -  [Install Mongodb for Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

##### Steps
In the root directory of this code, use the following commands:
`docker-compose build` - _to build the project_
`docker-compose up` - _to run the project_
_**Note:** You may need to run with the root permission if Docker is installed via root user. like: `sudo docker-compose up`_

These command runs the following services using docker-compose.yml

###### back:
back service will run and create container called `demo-back-end`.
back service is our service layer running on top of `mongodb`. The default port at which this service is running is 5000 which can be changed by setting the environment variable

_***Note:*** You need to open port 4000 from the server configurations to make it avaiable for `demo server`. If you want to change/customize the port you can change the outisde port from the back service of docker-compose.yml file. Like if you want to configure port 4001 then you need to replace the following lines:_

ports:

    - '4000:4000'
with the following lines:

ports:

    - '4001:4000'

##### front:
front service will run and create container called `demo-front-end`. It needs `back` services to intract with the database that is why it will run after `back` service image.

##### How to set Envrionment Variable:
**_Steps to set Custom mongodb connection string:_**
Set environment variable `DB_CON_STR` for MongoDB custom path
Cammand: export `DB_CON_STR=<DB-PATH>` (Connection string to connect with db)
To check/verify your environment variable `DB_CON_STR` value, use command: `echo ${DB_CONNECTION_STRING}`

**_Steps to set Custom JWT secret key:_**
Set environment variable `JWT_SECRET` for JWT token
Cammand: export `JWT_SECRET=<JWT-SECRET>` (`JWT_SECRET` for JWT Token)
To check/verify your environment variable `JWT_SECRET` value, use command: `echo ${JWT_SECRET}`

**_Steps to set Custom server PORT:_**
Set environment variable `SERVER_PORT` for server
Cammand: export `SERVER_PORT=<SERVER-PORT>` (`SERVER_PORT` for server)
To check/verify your environment variable `SERVER_PORT` value, use command: `echo ${SERVER_PORT}`


**Configurations for demo-front-end**
_**Note:** You need to open port 5000 from the server configurations to make it avaiable for users to use the `demo-front-end`. If you want to change/customize the port you can change the outisde port from the `front service` of `docker-compose.yml` file. Like if you want to configure `port 5001` the you need to replace the following lines:_

ports:

    - '5000:5000'
with the following lines:

ports:

    - '5001:5000'

Right now we are using default port of Back-End service as 4000. But in case if you will change/customize the port from the docker-compose.yml then you need to change that port in this constants file of front-end. (We have created the constants file to configure host and port). To change this, follow these steps:

**_Goto the path: `front-end/src/Constants/ElmLoader_**
If you have changed the port in docker-compose.yml (i.e. changed the port otherthan 4000 for back) then you need to set the configured port to the parameter port like if you have configured `4001` then you need to write: `port:"4001"`.

There is another parameter host is exposed. But we don't have to do anything untill we'll host our Back-End code separately on other server or domain from the `demo-front-end` code.

**This is all we need to deploy this demo `node-reactjs-docker` application.**
_If anyone wants any further instruction can contact me through email._
**_Thank you_**