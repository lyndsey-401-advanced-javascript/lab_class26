const db = [];
//POST schema 
//ID, Name, author, description 

const setGreeting 

const MW = (req, res, next) => {
    req.message = 'hello'
    console.log('middlware hit');
    next();
}

const greetAdmin(name) => {
    return function (req, res, next) {
        console.log(`${req.message}, ${name}`)
    }
}

applicationCache.get('/greet', setGreeting, greetAdmin('Jacob'), (req, res) => res.send('good'));
applicationCache.get('/MW', MW, handler);


//this would be located in server.js
module.exports = {
    app,
    start: () => {
        app.listen(3000, () => {
            console.log('app running');
        })
    }
}
//and then in index.js: 
//const server = require('./src/server.js)

//server.test.js file/folder
//const { app } = require('../src/server.js);
//const supertest = require('supertest')
