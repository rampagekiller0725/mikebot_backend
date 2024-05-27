import { createRequire } from 'module';
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { db } from './firebase.js';
const require = createRequire(import.meta.url);

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors({
    origin: 'https://mikebot-frontend1.vercel.app'
    // origin: 'http://localhost:3000',
}));

var corsOptions = {
    origin: [""],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';
app.post("/findUser", cors(corsOptions), async (req, res) => {
    try {
        const users = await getDocs(collection(db, 'users'));
        var isUserExist = false;
        users.forEach(async (user) => {
            if (user.data().name === req.body.name) {
                isUserExist = true;
                let data = user.data();
                if (user.data().timestamp == 0) { /// initialize timestamp
                    const docRef = doc(db, 'users', user.id);
                    data = {
                        ...data,
                        timestamp: new Date()
                    };
                    await updateDoc(docRef, data);
                }
                res.send({ user: data, status: 'success'});
                return;
            }
        })
        if (isUserExist === false) res.send({ user: {}, status: 'success'});
    } catch (err) {
        console.log(err);
        res.send({ status: 'failed' });
    }
});

app.post("/updateUser", cors(corsOptions), async (req, res) => {
    try {
        const users = await getDocs(collection(db, 'users'));
        var isUserExist = false;
        users.forEach(async (user) => {
            if (user.data().name === req.body.user.name) {
                isUserExist = true;
                const docRef = doc(db, 'users', user.id);
                await updateDoc(docRef, req.body.user);
                res.send({ status: 'success' });
                return;
            }
        })
        if (isUserExist === false) res.send({ status: 'failed' });
    } catch (err) {
        console.log(err);
        res.send({ status: 'failed' });
    }
});

app.post('/checkParticipant', cors(corsOptions), async (req, res) => {
    try {
        await client.start({
            botAuthToken: "7054392482:AAG47au7xGVg4qNjpH-9uTHUHdGNdZLkvd0"
        });
        await client.connect();
        const result = await client.invoke(
            new Api.channels.GetParticipant({
                channel: req.body.groupname,
                participant: req.body.username
            })
        )
        res.send({ result: result, status: 'success' });
    } catch(err) {
        console.log(err);
        res.send({ status: 'failed' });
    }
});

app.listen(4000, () => {
    console.log("node is running on 4000");
})


export default app;