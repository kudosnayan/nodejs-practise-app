const express = require('express')
const bodyParser = require("body-parser");
const User = require('../app/models/User');
const router = express.Router();
const requestIp = require('request-ip');
const UserController = require('../app/controllers/UserController');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.get('/', async (req, res) => {
    res.send('Hello World!')
})

router.get('/nayan', async (req, res) => {
    res.send('<h1 style="color:red;">Hello Nayan!</h1>')
})

router.post('/users', async (req, res) => {
    try {
        console.log(req.body);
        const user = new User(req.body)
        // User.image = req.file.path;
        // const createUser = await user.save(user);
        // res.status(201).send(JSON.parse(user))
    } catch (error) {
        res.status(400).send(`user save error ` + error)
    }
})

// get IP ADDRESS

// IP MIDDLEWARE
const ipMiddleware = function (req, res, next) {
    req.ip = requestIp.mw(req)
    next();
}
// IP MIDDLEWARE

router.get('/get-ip', ipMiddleware, async (req, res) => {
    const ip = req.ip;
    console.log("Ip address", ip);
    // navigator.vibrate(1000)
    // navigator.vibrate([200,100,200])
    // navigator.vibrate(0)
    return res.send('welcome ip code')
})


// ALgorithems
//  1. Linear search
router.get('/linear-search', UserController.linearSearch)
router.post('/binary-search', UserController.binarySearch)

// ALgorithems
module.exports = router;