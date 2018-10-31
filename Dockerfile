FROM openjdk:10-jdk
ADD /target/friendsBook-0.0.1-SNAPSHOT.jar /dockerfs/app/friendsBook-0.0.1-SNAPSHOT.jar
WORKDIR /dockerfs/app
ENTRYPOINT ["java","-jar","friendsBook-0.0.1-SNAPSHOT.jar"]