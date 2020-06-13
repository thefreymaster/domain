import React from 'react';
import * as Lumen from "../../Context";
import Flex from '../../common/Flex';
import { Switch } from 'antd';
import { turnRoomOff, turnRoomOn } from '../../api/rest';

const Rooms = (props) => {
    const [loading, setLoading] = React.useState(0);
    const { rooms, isLoading } = React.useContext(Lumen.Context);

    const handleChange = ({ on, id, setLoading, room }) => {
        setLoading(id.toString());

        return on ? turnRoomOff(id, setLoading) : turnRoomOn(id, setLoading)
    }

    const style = {
        item: {
            padding: '20px 0px 20px 0px',
            color: 'white',
            fontFamily: '"Fredoka One", cursive',
        },
        name: {
            marginLeft: 10,
        }
    }

    return rooms.map(room => {
        console.log(room)
        return (
            <Flex direction="row" style={style.item}>
                <Switch loading={loading == room.id} checked={room.action.on} onChange={() => handleChange({ on: room.action.on, id: room.id, setLoading, room })} />
                <div style={style.name}>{room.name}</div>
            </Flex>
        )
    })
}

export default Rooms;