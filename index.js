const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000


app.use(bodyParser.json())

//Controller Import
const UserController = require('./controllers/user')
const HouseController = require('./controllers/house')

const AuthController = require('./controllers/auth')

//moddleware
const {authenticated} = require('./middleware')
app.group("/api/v1", (router) => {

    //Auth API
    router.post('/login', AuthController.login)

    //Users API
    router.get('/users', UserController.index) //auth
    router.get('/user/:id', authenticated, UserController.show) //auth
    router.post('/register', UserController.store)
    router.patch('/user/:id', authenticated, UserController.patch) //auth
    router.delete('/user/:id', authenticated, UserController.delete) //auth

    //House API
    router.get('/houses', HouseController.index)
    router.get('/house/:id', HouseController.show)
    router.post('/house', HouseController.store)
    router.patch('/house/:id', HouseController.patch)
    router.delete('/house/:id', HouseController.delete)

    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))