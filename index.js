const express = require('express');
require('dotenv').config();
const app = express();
const low = require('lowdb');
const axios = require('axios');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');
const _ = require('lodash');

const adapter = new FileSync('db.json');
const db = low(adapter);


const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 6700;

const defaultDb = {
    bedroom: [
        {
            month: "Jan",
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            month: "Feb",
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            month: "March",
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        }
    ],
    livingroom: [
        {
            month: "Jan",
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            month: "Feb",
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            month: "March",
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        },
        {
            lastOn: null,
            totalTimeOn: 0,
            active: false,
        }
    ]
}

db.defaults(defaultDb)
    .write()

const getGroups = () => {
    axios.get(`${process.env.HUE_HOST}/api/${process.env.HUE_TOKEN}/groups`)
        .then(function (response) {
            const groups = Object.keys(response.data).map(key => {
                const group = response.data[key];
                if (group.type === "Room") {
                    return group;
                }
            })
            console.log(_.compact(groups))
            io.emit('groups_update', _.compact(groups));
        })
        .catch(function (error) {
            console.log(error);
        })
}

app.get(`/api/groups`, (req, res) => {
    axios.get(`${process.env.HUE_HOST}/api/${process.env.HUE_TOKEN}/groups`)
        .then(function (response) {
            const groups = Object.keys(response.data).map(key => {
                const group = response.data[key];
                if (group.type === "Room") {
                    return group;
                }
            })
            console.log(_.compact(groups))
            res.send(_.compact(groups));
        })
        .catch(function (error) {
            console.log(error);
        })
})

server.listen(port, () => {
    getGroups();
    console.log(`Lights running on 192.168.124.10:${port}`)
});
