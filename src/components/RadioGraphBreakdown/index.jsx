import React from 'react';
import { filter } from 'lodash';
import { ResponsiveRadar } from '@nivo/radar';
import { useLumenContext } from '../../Context';

const RadioGraphBreakdown = () => {
    const context = useLumenContext();
    const [houseAnalytics] = filter(context.house.analytics, { id: new Date().getMonth() });
    const bubbleData = {
        name: "House",
        color: "hsl(217, 70%, 50%)",
        children: []
    }
    const keys = [];
    context.rooms.map(room => {
        keys.push(room.name);
        const [roomAnalytics] = filter(room.analytics, { id: new Date().getMonth() });
        bubbleData.children.push({
            "name": room.name,
            "color": "hsl(273, 70%, 50%)",
            "loc": ((roomAnalytics.totalTimeOn / houseAnalytics.totalTimeOn) * 100),
        });
    })
    return (
        <ResponsiveRadar
            data={bubbleData}
            keys={keys}
            indexBy="id"
            maxValue="auto"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: 'color' }}
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={{ scheme: 'nivo' }}
            fillOpacity={0.25}
            blendMode="multiply"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            isInteractive={true}
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default RadioGraphBreakdown;