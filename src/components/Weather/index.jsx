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
            <Flex width="100%" direction="row" alignItems="center" justifyContent="center" padding="0px 0px 10px 0px">
                <img style={{
                    width: 70
                }} src={`http://openweathermap.org/img/wn/${forcast.icon}@4x.png`} />
                <Flex direction="column">
                    <TitleAndDescription
                        noMargin
                        fontSize={28}
                        description={`${forcast.main}, ${forcast.description}`}
                        textAlign="center"
                    />
                    <TitleAndDescription
                        noMargin
                        description={`Feels like ${main.feels_like.toFixed(0)}°`}
                        textAlign="center"
                    />
                </Flex>

            </Flex>
            <Flex width="100%" direction="row" alignItems="center" justifyContent="center">
                <Flex width="33%" alignItems="center" justifyContent="center">
                    <TitleAndDescription
                        fontSize={28}
                        title={`${main.pressure}mb`}
                        description="Pressure"
                        textAlign="center"
                        noMargin
                    />
                </Flex>
                <Flex style={{ flexGrow: 1 }} />
                <Flex width="33%" alignItems="center" justifyContent="center">
                    <TitleAndDescription
                        noMargin
                        fontSize={28}
                        title={`${main.temp.toFixed(0)}°`}
                        description="Temperature"
                        textAlign="center"
                    />
                </Flex>
                <Flex style={{ flexGrow: 1 }} />
                <Flex width="33%" alignItems="center" justifyContent="center">
                    <TitleAndDescription
                        fontSize={28}
                        title={`${main.humidity}%`}
                        description="Humidity"
                        textAlign="center"
                        noMargin
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Weather;