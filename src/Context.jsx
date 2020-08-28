import React from 'react';
import io from 'socket.io-client';
import { isEqual } from 'lodash';
import { getRooms, getAnalytics } from './api/rest';
import { NIGHT_BACKGROUND_COLOR } from './constants';

const socket = io(process.env.REACT_APP_LUMEN_HOST);

export const Context = React.createContext();

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
        case 'SET_IS_DAY':
            newState.isDay = true;
            break;
        case 'SET_IS_NIGHT':
            newState.isDay = false;
            break;
        default:
            throw new Error();
    }
    return newState;
}

const initialState = {
    rooms: [],
    house: {
        analytics: [],
        totalPowerOn: 0,
    }, 
    isLoading: false,
    isDay: false,
    colors: {
        day: {
            color: 'black',
            backgroundColor: 'white'
        },
        night: {
            color: 'white',
            backgroundColor: NIGHT_BACKGROUND_COLOR
        }
    }
};

export const Provider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    React.useLayoutEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 6 && hour <= 17) {
            dispatch({ type: 'SET_IS_DAY' })
        }
        const rooms = getRooms();
        rooms.then((res) => {
            dispatch({ type: 'SET_ROOMS', payload: res.data })
        })
        socket.on('groups_update', (data) => {
            dispatch({ type: 'SET_ROOMS', payload: data })
        })
    }, [])

    return (
        <Context.Provider value={{ ...state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}