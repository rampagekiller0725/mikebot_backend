const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));

var corsOptions = {
    origin: [""],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const mongoose = require('mongoose');
const User = require("./models/user");

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'mikeplaybot',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : console.log('mongodb connected'));

app.get("/", cors(corsOptions), async (req, res) => {
    const data = await User.find();
    console.log(data);
});

app.post("/findUser", cors(corsOptions), async (req, res) => {
    try {
        const user = (await User.find({ name: req.body.name }))[0];
        res.send({ user: user, status: 'success' });
    } catch (err) {
        console.log(err);
        res.send({ status: 'failed' });
    }
});

app.post("/updateUser", cors(corsOptions), async (req, res) => {
    try {
        await User.updateOne({name: req.body.user.name}, req.body.user);
        res.send({ status: 'success' });
    } catch (err) {
        console.log(err);
        res.send({ status: 'failed' });
    }
})
app.listen(4000, () => {
    console.log("node is running on 4000");
})