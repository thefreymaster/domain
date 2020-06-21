import axios from 'axios';

export const getZones = () => axios.get('/api/zones')
    .then(response => response)
    .catch(function (error) {
        // handle error
        console.log(error);
    })

export const setZoneOn = ({ zone, setZones }) => {
    axios.get(`/api/zone/on/${zone.zone}`)
        .then(response => {
            setZones(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

export const setZoneOff = ({ zone, setZones }) => axios.get(`/api/zone/off/${zone.zone}`)
    .then(response => setZones(response.data))
    .catch(function (error) {
        // handle error
        console.log(error);
    })

export const getCalendarEntries = () => axios.get('/api/calendar')
    .then(response => response)
    .catch(function (error) {
        // handle error
        console.log(error);
    })

export const getCalendarEntriesCount = () => axios.get('/api/calendar/count')
    .then(response => response)
    .catch(function (error) {
        // handle error
        console.log(error);
    })

export const getRooms = () => axios.get('/api/rooms')
    .then(response => {
        return response
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

export const getAnalytics = () => axios.get('/api/analytics')
    .then(response => {
        return response
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

export const turnRoomOn = (id, setLoading) => axios.get(`/api/room/on/${id}`)
    .then(response => {
        setLoading(0);
        return response
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

export const turnRoomOff = (id, setLoading) => axios.get(`/api/room/off/${id}`)
    .then(response => {
        setLoading(0);
        return response
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })