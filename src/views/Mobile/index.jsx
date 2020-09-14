import React from 'react';
import Container from '../../common/Container';
import Flex from '../../common/Flex';
import { isMobile } from 'react-device-detect';
import { Context } from '../../Context';
import { WHITE, NIGHT_BACKGROUND_COLOR, NIGHT_BACKGROUND_COLOR_CONTAINER, DAY_BACKGROUND_COLOR_CONTAINER } from '../../constants';
import ThemeToggle from '../../components/Theme';
import { Homebridge } from '../../components/Homebridge';


const Mobile = () => {
    const { isDay } = React.useContext(Context);

    if (isMobile) {
        return (
            <Container backgroundColor={isDay ? DAY_BACKGROUND_COLOR_CONTAINER : NIGHT_BACKGROUND_COLOR_CONTAINER}>
                <Flex width="100%" margin="30px 30px 30px 30px">
                    <Flex height="100%" width={isMobile ? "100%" : "33%"} margin={isMobile ? "0px 0px 0px 0px" : "0px 30px 0px 0px"} direction="column">
                        <Flex wrap borderRadius="3px 10px 10px" justifyContent="flex-start" title={isMobile ? "Breakdown" : "Controls"} direction="row" padding="20px" height={isMobile ? "calc(100%)" : "calc(100% - 160px)"} width="calc(100%)" margin={`0px ${isMobile ? 0 : 30} 0px 0px`} backgroundColor={isDay ? WHITE : NIGHT_BACKGROUND_COLOR} boxShadow>
                            <Homebridge />
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

export default Mobile;
