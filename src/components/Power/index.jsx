import React from 'react';
import * as Lumen from "../../Context";
import TitleAndDescription from '../../common/TitleAndDescription';
import { POWER_PER_HOUR, getHours } from '../../utils';

const Power = () => {
    const context = React.useContext(Lumen.Context);
    console.log(context);
    return (<TitleAndDescription fontSize={28} title={getHours(context.house.totalTimeOn || 0) * POWER_PER_HOUR} description="Power Usage" />)
}

export default Power;