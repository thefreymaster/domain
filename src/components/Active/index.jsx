import React from 'react';
import { filter } from 'lodash';
import * as Lumen from "../../Context";
import TitleAndDescription from '../../common/TitleAndDescription';

const Active = () => {
    const context = React.useContext(Lumen.Context);
    if (context.rooms.length === 0) {
        return null
    }
    const month = new Date().getMonth();
    const power = parseFloat(context.rooms).toFixed(2) || 0;
    const roomMonths = context.rooms.map(room => (
        room.analytics[month].totalTimeOn
    ))
    const mostActive = Math.max(...roomMonths.map(room => room.totalTimeOn));
    return null;
}

export default Active;