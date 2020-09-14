import React from 'react';
import * as Lumen from "../../Context";
import TitleAndDescription from '../../common/TitleAndDescription';
import Flex from '../../common/Flex';
import Loader from 'react-loader-spinner'

const Weather = () => {
    const { weather, isDay } = React.useContext(Lumen.Context);
    if (!weather) {
        return (
            <Flex height="100%" width="100%" direction="column" justifyContent="center" alignItems="center">
                <Loader
                    type="Puff"
                    color="#fff"
                    height={30}
                    width={30}
                    timeout={3000} //3 secs
                />
            </Flex>
        )
    }
    const { main } = weather;
    const [forcast] = weather.weather;
    return (

        <Flex direction="column" width="100%">
            <Flex width="100%" direction="column" alignItems="center">
                <TitleAndDescription
                    noMargin
                    fontSize={28}
                    title={<img style={{
                        width: 70
                    }} src={`http://openweathermap.org/img/wn/${forcast.icon}@4x.png`} />
                    }
                    description={`${forcast.main}, ${forcast.description}`}
                    textAlign="center"
                />
            </Flex>
            <Flex width="100%" direction="row" alignItems="center">
                <TitleAndDescription
                    noMargin
                    fontSize={28}
                    title={`${main.temp.toFixed(0)}°`}
                    description="Temperature"
                    textAlign="center"
                />
                <Flex style={{ flexGrow: 1 }} />
                <TitleAndDescription
                    fontSize={28}
                    title={`${main.pressure}mb`}
                    description="Pressure"
                    textAlign="center"
                    noMargin
                />
                <Flex style={{ flexGrow: 1 }} />
                <TitleAndDescription
                    fontSize={28}
                    title={`${main.humidity}%`}
                    description="Humidity"
                    textAlign="center"
                    noMargin
                />
            </Flex>
        </Flex>
    )
}

export default Weather;