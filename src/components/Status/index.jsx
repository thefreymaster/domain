import React from 'react';
import classNames from 'classnames';
import TitleAndDescription from '../../common/TitleAndDescription';
import { POWER_PER_HOUR, getHours } from '../../utils';
import Flex from '../../common/Flex';
import './status.css';
import { Context } from '../../Context';
import { turnRoomOff, turnRoomOn } from '../../api/rest';

const Status = () => {
    const [isActivelyPressed, setIsActivelyPressed] = React.useState({id: -1, active: false});
    const { isDay, rooms, setIsLoading } = React.useContext(Context);
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
        const lastOn = new Date(room.lastOn).toLocaleTimeString('en-US', {
            hour: 'numeric', minute: 'numeric'
        });
        const handleChange = ({ on, id }) => {
            return on ? turnRoomOff(id) : turnRoomOn(id)
        }
        if (room.on) {
            const now = new Date().getTime();
            onFor = ((now - room.lastOn) / 60000).toFixed(2);
            onForString = `${onFor > 60 ? `${(onFor / 60).toFixed(2)} Hours` : `${onFor} Minutes`}`
        }
        else {
            onForString = `Last on: ${lastOn}`;
        }
        return (
            <Flex 
                onClick={() => {
                    handleChange({ on: room.on, id: room.id });
                    animateActive({id: room.id, setIsActivelyPressed});
                }}
                padding="10px"
                direction="column"
                // style={{ border: determineBorder(isDay) }}
                justifyContent="center"
                alignItems="center"
                height="140px"
                width="calc(50% - 20px)"
                margin="10px 10px"
                borderRadius="10px"
                className={classNames("cursor-hover status", { 
                    "status-day": isDay, 
                    "status-night": !isDay,
                    "status-day-active": isDay && isActivelyPressed.id === room.id && isActivelyPressed.active
                })}
            >
                <div className={classNames({ 'breath-animation': room.on })} style={inline.bubble}></div>
                <TitleAndDescription noMargin fontSize={12} title={room.name} />
                <div style={inline.onFor}>{onForString}</div>
            </Flex>
        )
    }
    )
}

const animateActive = ({id, setIsActivelyPressed}) => {
    setIsActivelyPressed({id, active: true});
    setInterval(() => {
        setIsActivelyPressed({id: -1, active: false});
    }, 200)
}

const determineBorder = (isDay) => {
    if (isDay) {
        return "2px solid rgba(0, 0, 0, 0.12)";
    }
    return "2px solid rgba(255, 255, 255, 0.12)";
}

export default Status;