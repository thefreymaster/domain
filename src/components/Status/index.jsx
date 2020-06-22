import React from 'react';
import * as Lumen from "../../Context";
import TitleAndDescription from '../../common/TitleAndDescription';
import { POWER_PER_HOUR, getHours } from '../../utils';
import Flex from '../../common/Flex';

const Status = () => {
    const context = React.useContext(Lumen.Context);
    return context.rooms.map(room => {
        const inline = {
            bubble: {
                height: 30,
                width: 30,
                backgroundColor: room.on ? '#ffd34d' : '#cccccc',
                borderRadius: 50,
                marginBottom: 5,
                border: "4px solid grey",
                transition: 'background-color 1s ease-in-out',
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
            onForString = `On For ${onFor}Min`
        }
        else{
            onForString = 'Off'
        }
        return <Flex direction="column" style={{ borderBottom: "2px dashed rgba(255, 255, 255, 0.23)" }} justifyContent="center" alignItems="center" height="100px" width="100%">
            <div style={inline.bubble}></div>
            <TitleAndDescription noMargin fontSize={12} title={room.name} />
            <div style={inline.onFor}>{onForString}</div>
        </Flex>
    }
    )
}

export default Status;