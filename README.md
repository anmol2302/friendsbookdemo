[![CircleCI](https://circleci.com/gh/anmol2302/friendsbookdemo/tree/master.svg?style=svg)](https://circleci.com/gh/anmol2302/friendsbookdemo/tree/master)
# friendsbookdemo
# Spring Boot with SpringData Neo4J
Application to add user in social media

## Version used
- Spring Boot - 1.5.14.RELEASE
- Neo4J Bolt Driver - 2.1.1

## REST endpoint
- `/api/v1/user` - returns all users and their relationships (movies)

## Neo4J 
- Docker command to bring up Neo4J server
```
docker run --publish=7474:7474 --publish=7687:7687 neo4j:3.0
```
- Neo4J Browser URL
```
http://localhost:7474/browser
```

## Cypher Queries for Neo4J
- Creation of User nodes:
```
CREATE {nodeName}


```
- Adding new relationship

```
MATCH (a:User),(b:User)
WHERE a.name ='gautham' AND b.name = 'anmol'
CREATE  (a)-[r:FRIEND_OF]->(b)
CREATE  (a)<-[f:FRIEND_OF]-(b);
```


Api Documentation using Swagger :http://172.23.238.179:8080/swagger-ui.html#/user-resource
