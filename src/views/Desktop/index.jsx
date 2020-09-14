import React from 'react';
import Container from '../../common/Container';
import Flex from '../../common/Flex';
import Branding from '../../components/Branding';
import Weather from '../../components/Weather';
import Status from '../../components/Status';
import Breakdown from '../../components/Breakdown';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import PreviousMonth from '../../components/PreviousMonth';
import { Context } from '../../Context';
import { WHITE, NIGHT_BACKGROUND_COLOR, NIGHT_BACKGROUND_COLOR_CONTAINER, DAY_BACKGROUND_COLOR_CONTAINER } from '../../constants';
import ThemeToggle from '../../components/Theme';
import { Homebridge } from '../../components/Homebridge';
import LightMetrics from '../../components/LightMetrics';


const Desktop = () => {

    const { isDay } = React.useContext(Context);
    const dayNightBackgroundColor = isDay ? WHITE : NIGHT_BACKGROUND_COLOR;

    if (isBrowser || isTablet) {
        return (
            <Container backgroundColor={isDay ? DAY_BACKGROUND_COLOR_CONTAINER : NIGHT_BACKGROUND_COLOR_CONTAINER}>
                <Flex width="23%">
                    <Flex direction="column" alignItems="flex-start" borderRadius="3px 10px 10px" width="100%" margin="30px 30px 30px 30px" backgroundColor={dayNightBackgroundColor} boxShadow>
                        <Branding />
                        <Flex direction="column" width="100%" height="100%" padding="0px 10px">
                            <Homebridge />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex width="77%" margin="30px 30px 30px 0px">
                    <Flex height="100%" width="33%" margin="0px 30px 0px 0px" direction="column">
                        <Flex animate borderRadius="3px 10px 10px"  title="Weather" padding="20px" height="200px" width="100%" backgroundColor={dayNightBackgroundColor} boxShadow>
                            <Weather />
                        </Flex>
                        <Flex wrap borderRadius="3px 10px 10px" justifyContent="flex-start" title="Controls" direction="row" padding="20px" height="calc(100% - 260px)" width="calc(100%)" margin={`0px ${isMobile ? 0 : 30} 0px 0px`} backgroundColor={dayNightBackgroundColor} boxShadow>
                            <Status />
                        </Flex>
                    </Flex>
                    <Flex height="100%" width="66%" direction="column">
                        <Flex direction="row"  title="Usage">
                            <Flex animate borderRadius="3px 10px 10px" padding="20px" height="100px" width="50%" margin="0px 30px 0px 0px" backgroundColor={dayNightBackgroundColor} boxShadow>
                                <LightMetrics />
                            </Flex>
                            <Flex animate borderRadius="3px 10px 10px" padding="20px" height="100px" width="50%" margin="0px 0px 0px 0px" backgroundColor={dayNightBackgroundColor} boxShadow>
                                <PreviousMonth />
                            </Flex>
                        </Flex>
                        <Flex borderRadius="3px 10px 10px" title="Month" padding="20px" height="calc(100% - 160px)" width="100%" margin="0px 0px 0px 0px" backgroundColor={dayNightBackgroundColor} boxShadow>
                            <Breakdown />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex>
                    <ThemeToggle />
                </Flex>
            </Container>
        );
    }
    return null;
}

export default Desktop;
