import React from 'react';
import classNames from 'classnames';
import TitleAndDescription from '../../common/TitleAndDescription';
import { POWER_PER_HOUR, getHours } from '../../utils';
import Flex from '../../common/Flex';
import './status.css';
import { Context } from '../../Context';

const Status = () => {
    const { isDay, rooms } = React.useContext(Context);
    return rooms.map((room, index) => {
        const inline = {
            bubble: {
                height: 30,
                width: 30,
                borderRadius: 50,
                marginBottom: 5,
                border: "4px solid grey",
                transition: 'background-color 1s ease-in-out',
                '@keyframes': '0% {background-color: #c55d03; 50% {background-color: #eb6d00;}; 100% {background-color: #c55d03;}}',
            },
            onFor: {
                fontSize: 10,
                backgroundColor: '#cccccc',
                padding: '0px 10px 0px 10px',
                borderRadius: 30,
            }
        }
        let onFor;
        let onForString;
        if (room.on) {
            const now = new Date().getTime();
            onFor = ((now - room.lastOn) / 60000).toFixed(2);
            onForString = `${onFor > 60 ? `${(onFor/60).toFixed(2)} Hours` : `${onFor} Minutes` }`
        }
        else {
            onForString = 'Off'
        }
        return (
            <Flex padding="20px" direction="column" style={{ borderBottom: index !== rooms.length - 1 && determineBorder(isDay) }} justifyContent="center" alignItems="center" height="100px" width="100%">
                <div className={classNames({ 'breath-animation': room.on })} style={inline.bubble}></div>
                <TitleAndDescription noMargin fontSize={12} title={room.name} />
                <div style={inline.onFor}>{onForString}</div>
            </Flex>
        )
    }
    )
}

const determineBorder = (isDay) => {
    if (isDay) {
        return "2px dashed rgba(255, 255, 255, 0.23)";
    }
    return "2px dashed rgba(255, 255, 255, 0.23)";
}

export default Status;