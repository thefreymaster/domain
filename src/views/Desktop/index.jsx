import React from 'react';
import Container from '../../common/Container';
import Flex from '../../common/Flex';
import Branding from '../../components/Branding';
import Weather from '../../components/Weather';
import Status from '../../components/Status';
import PieGraphBreakdown from '../../components/PieGraphBreakdown';
import { isMobile, isTablet, isBrowser } from 'react-device-detect';
import PreviousMonth from '../../components/PreviousMonth';
import { Context } from '../../Context';
import { WHITE, NIGHT_BACKGROUND_COLOR, NIGHT_BACKGROUND_COLOR_CONTAINER, DAY_BACKGROUND_COLOR_CONTAINER } from '../../constants';
import ThemeToggle from '../../components/Theme';
import { Homebridge } from '../../components/Homebridge';
import LightMetrics from '../../components/LightMetrics';
import RadioGraphBreakdown from '../../components/RadioGraphBreakdown';


const Desktop = () => {

    const { isDay } = React.useContext(Context);
    const dayNightBackgroundColor = isDay ? WHITE : NIGHT_BACKGROUND_COLOR;

    if (isBrowser || isTablet) {
        return (
            <Container backgroundColor={isDay ? DAY_BACKGROUND_COLOR_CONTAINER : NIGHT_BACKGROUND_COLOR_CONTAINER}>
                <Flex width="15%">
                    <Flex direction="column" alignItems="flex-start" width="100%" borderRight>
                        <Branding />
                        <Flex direction="column" width="100%" height="100%" padding="0px 0px 10px 0px">
                            <Status />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex width="85%">
                    <Flex height="100%" width="33%" direction="column" borderRight>
                        <Flex animate padding="20px" height="200px" width="100%" borderBottom>
                            <Weather />
                        </Flex>
                        <Flex wrap justifyContent="flex-start" direction="row" height="calc(100% - 120px)" width="calc(100%)">
                            <Homebridge />
                        </Flex>
                    </Flex>
                    <Flex height="100%" width="67%" direction="column">
                        <Flex direction="row" borderBottom>
                            <Flex animate padding="20px" height="100px" width="50%" borderRight>
                                <LightMetrics />
                            </Flex>
                            <Flex animate padding="20px" height="100px" width="50%" margin="0px 0px 0px 0px">
                                <PreviousMonth />
                            </Flex>
                        </Flex>
                        <Flex padding="20px" height="calc(100% - 110px)" width="100%" margin="10px 0px 0px 0px">
                            <PieGraphBreakdown />
                        </Flex>
                        {/* <Flex padding="20px" height="calc(50% - 110px)" width="100%" margin="10px 0px 0px 0px">
                            <RadioGraphBreakdown />
                        </Flex> */}
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
