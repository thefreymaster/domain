import React from 'react';
import './App.css';
import Container from './common/Container';
import Flex from './common/Flex';
import Branding from './components/Branding';
import Rooms from './components/Rooms';
import Power from './components/Power';
import Hours from './components/Hours';
import Status from './components/Status';
import Breakdown from './components/Breakdown';
import { isMobile } from 'react-device-detect';
import PreviousMonth from './components/PreviousMonth';
import { Context } from './Context';
import { GREY, WHITE, NIGHT_BACKGROUND_COLOR, NIGHT_BACKGROUND_COLOR_CONTAINER, DAY_BACKGROUND_COLOR_CONTAINER } from './constants';
import ThemeToggle from './components/Theme';


function App() {
  const [height, setHeight] = React.useState(window.innerHeight);
  const [open, setOpen] = React.useState(false);
  const inline = {
    zones: {
      width: '100%',
      flexWrap: 'wrap',
      paddingTop: 20,
      paddingRight: 20,
    },
    calendar: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      title: {
        position: 'relative',
        top: 20,
        fontWeight: 500
      }
    },
  }

  window.addEventListener('resize', () => {
    setHeight(window.innerHeight - 129)
  })

  const { isDay } = React.useContext(Context);

  return (
    <Container backgroundColor={isDay ? DAY_BACKGROUND_COLOR_CONTAINER : NIGHT_BACKGROUND_COLOR_CONTAINER}>
      {!isMobile &&
        <Flex width="20%">
          <Flex direction="column" alignItems="flex-start" borderRadius="3px 10px 10px" width="100%" margin="30px 30px 30px 30px" backgroundColor={isDay ? WHITE : NIGHT_BACKGROUND_COLOR} boxShadow>
            <Branding />
            <Flex direction="column" width="100%" padding="0px 10px">
              {/* <Status /> */}
            </Flex>
          </Flex>
        </Flex>
      }
      <Flex width={isMobile ? "100%" : "80%"} margin={isMobile ? "30px 30px 30px 30px" : "30px 30px 30px 0px"}>
        <Flex height="100%" width={isMobile ? "100%" : "33%"} margin={isMobile ? "0px 0px 0px 0px" : "0px 30px 0px 0px"} direction="column">
          <Flex borderRadius="3px 10px 10px" title="Usage" padding="20px" height="100px" width="100%" backgroundColor={isDay ? WHITE : NIGHT_BACKGROUND_COLOR} boxShadow>
            <Hours />
          </Flex>
          <Flex wrap borderRadius="3px 10px 10px" justifyContent="flex-start" title={isMobile ? "Breakdown" : "Controls"} direction="row" padding="20px" height="calc(100% - 160px)" width="calc(100%)" margin={`0px ${isMobile ? 0 : 30} 0px 0px`} backgroundColor={isDay ? WHITE : NIGHT_BACKGROUND_COLOR} boxShadow>
            {isMobile ? <Breakdown /> : <Status />}
          </Flex>
        </Flex>
        {!isMobile &&
          <Flex height="100%" width="66%" direction="column">
            <Flex direction="row">
              <Flex borderRadius="3px 10px 10px" padding="20px" height="100px" width="50%" margin="30px 30px 0px 0px" backgroundColor={isDay ? WHITE : NIGHT_BACKGROUND_COLOR} boxShadow>
                <Power />
              </Flex>
              <Flex borderRadius="3px 10px 10px" padding="20px" height="100px" width="50%" margin="30px 0px 0px 0px" backgroundColor={isDay ? WHITE : NIGHT_BACKGROUND_COLOR} boxShadow>
                <PreviousMonth />
              </Flex>
            </Flex>
            <Flex borderRadius="3px 10px 10px" title="Month" padding="20px" height="calc(100% - 160px)" width="100%" margin="0px 0px 0px 0px" backgroundColor={isDay ? WHITE : NIGHT_BACKGROUND_COLOR} boxShadow>
              <Breakdown />
            </Flex>
          </Flex>
        }
      </Flex>
      <Flex>
        <ThemeToggle />
      </Flex>
    </Container>
  );
}

export default App;
