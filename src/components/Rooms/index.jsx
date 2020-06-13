import React from 'react';
import * as Lumen from "../../Context";
import Flex from '../../common/Flex';
import { Switch } from 'antd';
import { turnRoomOff, turnRoomOn } from '../../api/rest';
import TitleAndDescription from '../../common/TitleAndDescription';

const Rooms = (props) => {
    const [loading, setLoading] = React.useState(0);
    const { rooms, isLoading } = React.useContext(Lumen.Context);

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

    return rooms.map(room => {
        console.log(room)
        return (
            <Flex alignItems="center" direction="row" style={style.item}>
                <Switch loading={loading == room.id} checked={room.action.on} onChange={() => handleChange({ on: room.action.on, id: room.id, setLoading, room })} />
                <TitleAndDescription title={room.name} description={room.state.all_on ? "All lights on" : room.state.any_on ? "Some lights on" : "No lights on"} />
            </Flex>
        )
    })
}

export default Rooms;