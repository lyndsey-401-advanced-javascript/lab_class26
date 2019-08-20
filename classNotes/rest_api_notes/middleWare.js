'use strict';

//REST APIs yesterday (Monday Aug 19) 
//Action and Data two most important things
//HTTP Methods: GET POST PUT PATCH DELETE OPTIONS

//JSON Server - in url 

const jsonServer = require('json-server');
const server = jsonServer.create();
const routes = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults(); 
//look in the JSON server library to see what all these methods actually DO (documentation)

server.use(routes); //references a server.js file that is created in lecture
server.use(middlewares); //sets up your middleware
server.listen(3000, () => {
    console.log('JSON server is running bruh');
});


//both things and types are now ROUTES on your JSON server! (in db.json file)
//201 success message in real time 


//function currying example 
function add(num1){
    return function(num2){
        return num1 + num2; 
    }
}
add(1)(2);


const addES = num3 => num4 => num3 + num4; 
addES(40)(50);

const greet = (greeting) => (seperator) => (name) => `${greeting}, ${seperator}, ${name}!!`;
const hello = grett('hello');
const goodbye = greet('goodbye');
hello('there', 'Jacob'); 

// express to use methods on object: 
// express();
// app = express();
// app.METHOD(PATH, HANDLER)
// CRUD operations METHOD = {GET, POST, PUT, DELETE} 
// CRUD Create.Read.Update.Delete.
// method is our action, path is our resource - e.g. /things 
// get: /things reads whatever exists at things resource
// handler = some sort of functionality we want to run against resource things 


// Middleware = any functionality you want to use before the response is returned 
// middleware (req, res, next) -- next is the next function in the series of functionality - it is essentially a pointer
// app.method(path, MIDDLEWARE, handler)

const mw = (req, res, next) => {
    //do some stuff
    next();
}

//application middleware vs route middleware 
// app.use(expres, static('/public)); <- application 
// app.get('/auth', createSession , login) <- route 
// e.g. app.post(/auth) would NOT run createSession 
// don't forget to call next!! 
// error middleware - gets four parameters 

const handleError = (err, req, res, next) = {
    //do some stuff  
};

// const valUse = () => next (new Error());
// const handleError = (err, req, res, next) => {
//     if (err
//         req.session = toRes
//         next());
// }


