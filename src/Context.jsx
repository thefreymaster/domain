import React from 'react';
import { isEqual } from 'lodash';
import { getRooms, getAnalytics } from './api/rest';

const defaultState = {
    zones: [{
        "name": "Front Yard Center",
        "zone": "1",
        "active": false,
        "uptime": 0
    },
    {
        "name": "Front Yard Right",
        "zone": "2",
        "active": false,
        "uptime": 0
    },
    {
        "name": "Backyard",
        "zone": "4",
        "active": false,
        "uptime": 0
    },
    {
        "name": "Front Yard Flower Beds",
        "zone": "5",
        "active": false,
        "uptime": 0
    }],
    usage: {
        amount: 0,
        time: 0,
        change: 0,
    },
    analytics: {}
}

export const Context = React.createContext(defaultState);

const reducer = (state, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'SET_ROOMS':
            newState.rooms = action.payload.rooms;
            newState.house = action.payload.house;
            break;
        case 'SET_ANALYTICS':
            newState.analytics = action.payload;
            break;
        default:
            throw new Error();
    }
    return newState;
}

const initialState = { rooms: [], house: {}, isLoading: false };

export const Provider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    console.log(state)
    React.useLayoutEffect(() => {
        const rooms = getRooms();
        rooms.then((res) => {
            dispatch({ type: 'SET_ROOMS', payload: res.data })
        })
        props.socket.on('groups_update', (data) => {
            dispatch({ type: 'SET_ROOMS', payload: data })
        })
    }, [])

    return (
        <Context.Provider value={{ ...state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}