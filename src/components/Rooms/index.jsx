import React from 'react';
import * as Lumen from "../../Context";
import Flex from '../../common/Flex';
import { Switch } from 'antd';
import { turnRoomOff, turnRoomOn } from '../../api/rest';
import TitleAndDescription from '../../common/TitleAndDescription';

const Rooms = (props) => {
    const [loading, setLoading] = React.useState(0);

    const context = React.useContext(Lumen.Context);

    const handleChange = ({ on, id, setLoading, room }) => {
        setLoading(id.toString());

        return on ? turnRoomOff(id, setLoading) : turnRoomOn(id, setLoading)
    }

    const style = {
        item: {
            padding: '12px 0px 12px 0px',
            color: 'white',
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
        return (
            <Flex alignItems="flex-start" direction="row" style={style.item}>
                <Switch loading={loading == room.id} checked={room.on} onChange={() => handleChange({ on: room.on, id: room.id, setLoading, room })} />
                <TitleAndDescription fontSize={14} title={room.name} description={room.on ? "All lights on" : "No lights on"} />
            </Flex>
        )
    })
}

export default Rooms;