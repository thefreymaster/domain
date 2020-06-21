import React from 'react';
import './App.css';
import { Layout } from 'antd';
import io from 'socket.io-client';


import Container from './common/Container';
import Flex from './common/Flex';
import Branding from './components/Branding';
import * as Lumen from "./Context";
import Rooms from './components/Rooms';
import TitleAndDescription from './common/TitleAndDescription';
import Power from './components/Power';

const { Header, Footer, Content } = Layout;

export const GREEN = "#37b86e";
export const GREY = "#4d4d4d";

const socket = io('http://localhost:6700');

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

  return (
    <Lumen.Provider socket={socket}>
      <Container backgroundColor="#353535">
        <Flex width="20%">
          <Flex borderRadius="20px" width="100%" padding="20px" margin="30px 30px 30px 30px" backgroundColor={GREY} boxShadow>
            <Branding />
          </Flex>
        </Flex>
        <Flex width="80%" margin="30px 30px 30px 0px">
          <Flex height="100%" width="33%" margin="0px 30px 0px 0px" direction="column">
            <Flex borderRadius="20px" title="Usage" padding="20px" height="100px" width="100%" backgroundColor={GREY} boxShadow>
              <Power />
            </Flex>
            <Flex borderRadius="20px" justifyContent="center" title="Rooms" direction="column" padding="20px" height="calc(75% - 80px)" width="100%" margin="0px 30px 0px 0px" backgroundColor={GREY} boxShadow>
              <Rooms />
            </Flex>
            <Flex borderRadius="20px" title="Most Active" padding="20px" height="calc(25% - 80px)" width="100%" backgroundColor={GREY} boxShadow>
              <TitleAndDescription fontSize={20} title="Living Room" description="Most used room" />
            </Flex>
          </Flex>
          <Flex height="100%" width="66%" direction="column">
            <Flex direction="row">
              <Flex borderRadius="20px" padding="20px" height="100px" width="50%" margin="30px 30px 0px 0px" backgroundColor={GREY} boxShadow>
                <TitleAndDescription fontSize={28} title="23H" description="Hours On" />
              </Flex>
              <Flex borderRadius="20px" padding="20px" height="100px" width="50%" margin="30px 0px 0px 0px" backgroundColor={GREY} boxShadow>
                <TitleAndDescription fontSize={28} title="34%^" description="Change since last month" />
              </Flex>
            </Flex>
            <Flex borderRadius="20px" title="Month" padding="20px" height="100%" width="100%" margin="0px 0px 0px 0px" backgroundColor={GREY} boxShadow>
              USAGE %/MONTH
          </Flex>
          </Flex>

        </Flex>
      </Container>
    </Lumen.Provider>
  );
}

export default App;
