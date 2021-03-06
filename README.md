# PLASMA: Platform for Auxiliary Semantic Modeling Approaches

PLASMA is a modular framework for developing and evaluating semantic labeling, modeling and refinement approaches. Alltogether, PLASMA currently consists of the following microservices: 

* Discovery Service 
* Spring Boot Admin Service
* Gateway Service
* Semantic Database Service
* Knowledge Graph Service
* Schema Analysis Service
* Data Modeling Service 
* Semantic Recommendation Service
* Data Source Service 
* ARS-L Exact Label Matching

Each of these services takes over a specific task as described in our corresponding ESWC Paper. 

## Java Version
The java version of the service artifact is 11.  
The java version of the shared artifact ist 8.

## Development Preparation
* Install OpenJDK 11
* Install Docker for executing each service
* You require Maven to build the services
* We recommend IntelliJ as an IDE
* Checkout the repository
* Please add the following entries to your /etc/hosts file so that services might be able to communicate 
with each other (required due to a limitation of docker). This is required when developing or running
a component outside of Docker.
```
127.0.0.1 plasma-discovery-service
127.0.0.1 plasma-admin-service
127.0.0.1 plasma-sds
127.0.0.1 plasma-dss
127.0.0.1 plasma-gateway-service
127.0.0.1 plasma-kgs
127.0.0.1 plasma-sas
127.0.0.1 plasma-dms
127.0.0.1 plasma-srs
127.0.0.1 plasma-ars-l-lm
```

## Development and Building of the Backend Components
* For building the backend components execute ```maven package``` on the parent module
* For installing the backend components including docker containers execute ```maven install``` on the parent module
** Ensure that your docker is running on the local machine and can be reached

## Development and Building of the UI Components
* Build the docker container for the user interface using the corresponding ```Dockerfile```
* This is also included when building the whole system via docker-compose

## Execution
* After building all docker images, just execute the ```docker-compose``` script
* You can access the UI at ```localhost:80```


