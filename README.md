# node-vuejs-typescript-vuex-redis-docker-compose
### Background
As part of understanding the concept of vue.js node.js with docker I have developed some application, I hope it will help you to do a quick start on your learning journey

### GIT Link
```
git clone https://github.com/askeralim/node-vuejs-typescript-vuex-redis-docker-compose.git
```
### Projects
#### Project 1: ChatApp  
A Complete Vuejs+vuex with socket.io ChatApplication developed, backend run by node.js with Redis server[Docker implementation is pending]
To run this application it have two node project running in localhost (STill in Development mode, SOme typescript bugs need to be fixed.) 

[ChatApp-Server](https://github.com/askeralim/node-vuejs-typescript-vuex-redis-docker-compose/tree/master/chatapp-vue-server) 
Run the server in one termins with following command.
### Server Running Command
```
npm install
npm run start
```
[ChatApp-Client](https://github.com/askeralim/node-vuejs-typescript-vuex-redis-docker-compose/tree/master/chatapp-vue) 
Run the vuejs application in one termins with following command.
### Client Running Command
```
npm install
npm run serve
```
#### Running Application Screen:
The application can be accessed with link
```
http://localhost:8080
```
![Running Application Screen](https://github.com/askeralim/node-vuejs-typescript-vuex-redis-docker-compose/blob/master/Screen.JPG)
#### Project 2: Deploy the VueJs ChatApp in Docker container
Working on it, have some TypeScript Bugs need to be fixed.

