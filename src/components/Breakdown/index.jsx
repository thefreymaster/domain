import React from 'react';
import { filter } from 'lodash';
import * as Lumen from "../../Context";
import { ResponsivePie } from '@nivo/pie'
import { getHours } from '../../utils';
import { isMobile } from 'react-device-detect';

const Breakdown = () => {
    const context = React.useContext(Lumen.Context);
    if (context.rooms.length === 0) {
        return null
    }
    const [houseAnalytics] = filter(context.house.analytics, { id: new Date().getMonth() });
    const data = context.rooms.map(room => {
        const [roomAnalytics] = filter(room.analytics, { id: new Date().getMonth() });
        const roomData = {
            label: room.name,
            id: room.name,
            value: ((roomAnalytics.totalTimeOn / houseAnalytics.totalTimeOn) * 100).toFixed(2),
        }
        return roomData;
    })
    const theme = {
        textColor: '#eee',
        fontSize: '14px',
        tickColor: '#eee',
        fontWeight: 900
    }

    return (
        <ResponsivePie
            enableRadialLabels={!isMobile}
            sliceLabel={(d) => `${parseInt(d.value).toFixed(0)}%`}
            data={data}
            margin={!isMobile && { top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor={context.isDay ? 'black' : 'white'}
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: 'color' }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#fff"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            sortByValue
            theme={theme}
        />
    )
}

export default Breakdown;