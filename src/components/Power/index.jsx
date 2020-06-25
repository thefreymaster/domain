import React from 'react';
import * as Lumen from "../../Context";
import TitleAndDescription from '../../common/TitleAndDescription';
import { POWER_PER_HOUR, getHours } from '../../utils';

const Power = () => {
    const context = React.useContext(Lumen.Context);
    const power = parseFloat(context.house.totalPowerOn).toFixed(3) || 0;
    return (<TitleAndDescription fontSize={28} title={`${power}W`} description="Power Usage" />)
}

export default Power;