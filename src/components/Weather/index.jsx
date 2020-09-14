import React from 'react';
import { filter } from 'lodash';
import * as Lumen from "../../Context";
import TitleAndDescription from '../../common/TitleAndDescription';
import { POWER_PER_HOUR, getHours } from '../../utils';

const Weather = () => {
    const { weather } = React.useContext(Lumen.Context);
    if(!weather){
        return "Loading"
    }
    return (
        <TitleAndDescription
            fontSize={28}
            title={`Weather`}
            description="Hours Active"
        />
    )
}

export default Weather;