import React from 'react';
import * as Lumen from "../../Context";
import Flex from '../../common/Flex';
import { turnRoomOff, turnRoomOn } from '../../api/rest';
import TitleAndDescription from '../../common/TitleAndDescription';
import './rooms.style.css';
import { NIGHT_COLOR, DAY_COLOR, NIGHT_BACKGROUND_COLOR, WHITE } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Rooms = (props) => {
    const [loading, setLoading] = React.useState(0);

    const context = React.useContext(Lumen.Context);

    const handleChange = ({ on, id, setLoading, room }) => {
        setLoading(id.toString());
        return on ? turnRoomOff(id, setLoading) : turnRoomOn(id, setLoading)
    }

    const style = {
        item: {
            padding: '12px 12px 12px 12px',
            fontFamily: '"Fredoka One", cursive',
        },
        name: {
            marginLeft: 10,
        },
        description: {
            fontSize: 11,
            marginLeft: 10,
            color: '#ffffff6b',
            fontFamily: '"Fredoka One", cursive',
        }
    }

    return context.rooms.map(room => {
        const lastOn = new Date(room.lastOn).toLocaleTimeString('en-US', {
            hour: 'numeric', minute: 'numeric'
        });
        return (
            <Flex
                boxShadow
                borderRadius="3px 7px 7px 7px"
                height="80px"
                width="100%"
                alignItems="center"
                justifyContent="flex-start"
                className="room-toggle"
                backgroundColor={room.on ? NIGHT_BACKGROUND_COLOR : '#e2e2e2'}
                direction="row"
                style={style.item}
                onClick={() => handleChange({ on: room.on, id: room.id, setLoading, room })}>
                <FontAwesomeIcon color={context.isDay ? WHITE : NIGHT_BACKGROUND_COLOR}
                    size="2x" icon={faLightbulb} />
                <TitleAndDescription
                    fontSize={14}
                    title={room.name}
                    description={room.on ? "All lights on" : `On: ${lastOn}`}
                    titleColor={getColorForTitle({ isOn: room.on, isDay: context.isDay })}
                    secondaryColor={getColorForTitle({ isOn: room.on, isDay: context.isDay })}
                />
            </Flex>
        )
    })
}

const getColorForTitle = ({ isOn, isDay }) => {
    if (isOn) {
        return isDay ? WHITE : DAY_COLOR
    }
    return isDay ? '#9d9d9d' : DAY_COLOR
}

export default Rooms;