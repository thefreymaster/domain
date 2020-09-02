import React from 'react';
import { filter } from 'lodash';
import * as Lumen from "../../Context";
import TitleAndDescription from '../../common/TitleAndDescription';
import { POWER_PER_HOUR, getHours } from '../../utils';

const LightMetrics = () => {
    const context = React.useContext(Lumen.Context);
    if (context.house.analytics.length === 0) {
        return null
    }
    const month = new Date().getMonth();
    const [hours] = filter(context.house.analytics, { id: month }) || 0;

    const power = parseFloat(context.house.totalPowerOn).toFixed(3) || 0;
    return (<TitleAndDescription fontSize={28} title={`${power}W • ${(hours.totalTimeOn / 3600000).toFixed(2)}H`} description="Power • Hours" />)
}

export default LightMetrics;