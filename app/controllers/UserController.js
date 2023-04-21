const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const UserController = {
    linearSearch: (req, res,) => {
        // console.log("nn");
        const array = [1, 2, 3, 4, 5];
        const val = 3;
        for (let index = 0; index < array.length; index++) {
            if (array[index] == val) {
                console.log(index);
                return res.send(index)
            }
        }
        return -1;
    },

    binarySearch: (req, res) => {
        console.log(req.body)
        return res.send(req.body.dd)
    }
}
module.exports = UserController;