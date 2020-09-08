const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const low = require('lowdb');
const axios = require('axios');
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');
const _ = require('lodash');

const adapter = new FileSync('db.json');
const db = low(adapter);


app.use(express.json());
app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/images'));
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 6700;
const POWER_PER_HOUR = 0.0003;

const defaultMonths = [
    {
        id: 0,
        month: "Jan",
        totalTimeOn: 0,
    },
    {
        id: 1,
        month: "Feb",
        totalTimeOn: 0,
    },
    {
        id: 2,
        month: "March",
        totalTimeOn: 0,
    },
    {
        id: 3,
        month: "April",
        totalTimeOn: 0,
    },
    {
        id: 4,
        month: "May",
        totalTimeOn: 0,
    },
    {
        id: 5,
        month: "June",
        totalTimeOn: 0,
    },
    {
        id: 6,
        month: "July",
        totalTimeOn: 0,
    },
    {
        id: 7,
        month: "August",
        totalTimeOn: 0,
    },
    {
        id: 8,
        month: "September",
        totalTimeOn: 0,
    },
    {
        id: 9,
        month: "October",
        totalTimeOn: 0,
    },
    {
        id: 10,
        month: "November",
        totalTimeOn: 0,
    },
    {
        id: 11,
        month: "December",
        totalTimeOn: 0,
    }
]

const setRoomOnStatus = (room) => {
    db.get('rooms')
        .find({ id: room.id })
        .assign({ on: !room.on })
        .write();
}

const setRoomTimeOn = (room) => {
    db.get('rooms')
        .find({ id: room.id })
        .assign({ lastOn: new Date().getTime() })
        .write();
}

const setRoomTimeToNone = (room) => {
    db.get('rooms')
        .find({ id: room.id })
        .assign({ lastOn: null })
        .write();
}

const setHouseTimeOn = (timeOn, room) => {
    const month = new Date().getMonth();
    const house = db.get('house')
        .value();
    house.analytics[month].totalTimeOn = house.analytics[month].totalTimeOn + timeOn;
    db.get('house')
        .update('totalPowerOn', t => t + (POWER_PER_HOUR * room.lightsCount * (timeOn / 3600000)))
        .write();
}

const setMonthlyTimeOn = (room) => {
    const month = new Date().getMonth();
    const now = new Date().getTime();
    const timeOn = now - room.lastOn;
    const [stuff] = db.get('rooms')
        .filter({ id: room.id })
        .value()
    stuff.analytics[month].totalTimeOn = stuff.analytics[month].totalTimeOn + timeOn;
    setHouseTimeOn(timeOn, room);
}

const getAnalytics = ({ newData, oldData }) => {
    oldData.map((roomOld, index) => {
        const roomNew = newData[index];
        if (roomOld.on !== roomNew.on) {
            if (roomOld.on && !roomNew.on && roomNew.id === roomOld.id) {
                setMonthlyTimeOn(roomOld)
            }
            setRoomOnStatus(roomOld);
            if (roomNew.on) {
                setRoomTimeOn(roomNew)
            }
        }
    })
    // console.log({ newData, oldData })
}

const getGroups = () => {
    setTimeout(() => {
        axios.get(`${process.env.HUE_HOST}/api/${process.env.HUE_TOKEN}/groups`)
            .then(function (response) {
                const groups = Object.keys(response.data).map(key => {
                    const group = response.data[key];
                    if (group.type === "Room") {
                        group.id = key;
                        return group;
                    }
                })
                const compactGroups = _.compact(groups);
                const newData = compactGroups.map(group => {
                    return {
                        id: group.id,
                        on: group.action.on,
                    }
                })
                // console.log(compactGroups)
                if (!db.has('rooms').value()) {
                    db.defaults({
                        rooms: [],
                        house: {
                            analytics: [
                                {
                                    id: 0,
                                    month: "Jan",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 1,
                                    month: "Feb",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 2,
                                    month: "March",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 3,
                                    month: "April",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 4,
                                    month: "May",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 5,
                                    month: "June",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 6,
                                    month: "July",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 7,
                                    month: "August",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 8,
                                    month: "September",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 9,
                                    month: "October",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 10,
                                    month: "November",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 11,
                                    month: "December",
                                    totalTimeOn: 0,
                                }
                            ],
                            totalPowerOn: 0
                        },
                    })
                        .write()
                    compactGroups.map((group) => {
                        db.get('rooms').push({
                            analytics: [
                                {
                                    id: 0,
                                    month: "Jan",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 1,
                                    month: "Feb",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 2,
                                    month: "March",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 3,
                                    month: "April",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 4,
                                    month: "May",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 5,
                                    month: "June",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 6,
                                    month: "July",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 7,
                                    month: "August",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 8,
                                    month: "September",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 9,
                                    month: "October",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 10,
                                    month: "November",
                                    totalTimeOn: 0,
                                },
                                {
                                    id: 11,
                                    month: "December",
                                    totalTimeOn: 0,
                                }
                            ],
                            id: group.id,
                            name: group.name,
                            on: group.action.on,
                            lastOn: null,
                            lightsCount: group.lights.length,
                        }).write();
                    })
                }
                getAnalytics({ newData, oldData: db.get('rooms').value() })
                io.emit('groups_update', db.getState());
                getGroups();
            })
            .catch(function (error) {
                console.log(error);
            })
    }, 2000);
}

app.get(`/api/rooms`, (req, res) => {
    axios.get(`${process.env.HUE_HOST}/api/${process.env.HUE_TOKEN}/groups`)
        .then(function (response) {
            const groups = Object.keys(response.data).map(key => {
                const group = response.data[key];
                if (group.type === "Room") {
                    group.id = key;
                    return group;
                }
            })
            // console.log(_.compact(groups))
            io.emit('groups_update', db.getState());
            res.send(db.getState());
        })
        .catch(function (error) {
            console.log(error);
        })
})

app.get(`/api/room/on/:id`, (req, res) => {
    const { id } = req.params;
    axios.put(`${process.env.HUE_HOST}/api/${process.env.HUE_TOKEN}/groups/${id}/action`, {
        "on": true
    })
        .then(function (response) {
            getGroups();
            res.send({ success: true });
        })
        .catch(function (error) {
            console.log(error);
        })
})

app.get(`/api/room/off/:id`, (req, res) => {
    const { id } = req.params;
    axios.put(`${process.env.HUE_HOST}/api/${process.env.HUE_TOKEN}/groups/${id}/action`, {
        "on": false
    })
        .then(function (response) {
            getGroups();
            res.send({ success: true });
        })
        .catch(function (error) {
            console.log(error);
        })
})

app.get(`/api/analytics`, (req, res) => {
    const { roomId } = req.params;
    const month = new Date().getMonth();

    res.send(db.getState());
})

const data = {
    username: 'admin',
    password: 'admin',
};

const config = {
    method: 'post',
    url: 'http://192.168.124.10:8080/api/auth/login',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
};

const accessories = (token) => ({
    method: 'get',
    url: 'http://192.168.124.10:8080/api/accessories',
    headers: {
        'Authorization': `Bearer ${token}`
    },
})

const legalTypes = ['TemperatureSensor', 'ProtocolInformation', 'Thermostat'];

app.get(`/api/homebridge/accessories`, (req, res) => {
    axios(config)
        .then(function (response) {
            axios(accessories(response.data.access_token))
                .then(function (accessoriesResponse) {
                    res.send(_.filter(accessoriesResponse, legalTypes));
                })
                .catch(function (error) {
                    console.log(error);
                    res.send({ success: false, error: error });
                })
        })
        .catch(function (error) {
            console.log(error);
            res.send({ success: false, error: error });
        })
})

app.get(`/api/homebridge/accessories/all`, (req, res) => {
    axios(config)
        .then(function (response) {
            axios(accessories(response.data.access_token))
                .then(function (accessoriesResponse) {
                    res.send(accessoriesResponse.data);
                })
                .catch(function (error) {
                    console.log(error);
                    res.send({ success: false, error: error });
                })
        })
        .catch(function (error) {
            console.log(error);
            res.send({ success: false, error: error });
        })
})

app.get('/*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'build/index.html'));
});

server.listen(port, () => {
    getGroups();
    console.log(`Lights running on 192.168.124.10:${port}`)
});

