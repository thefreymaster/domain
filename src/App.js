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
import Hours from './components/Hours';
import Status from './components/Status';
import Active from './components/Active';
import Breakdown from './components/Breakdown';

const { Header, Footer, Content } = Layout;

export const GREEN = "#37b86e";
export const GREY = "#333333";

const socket = io('http://192.168.124.22:6700');

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
      <Container backgroundColor="#1d1d1d">
        <Flex width="20%">
          <Flex direction="column" alignItems="center" borderRadius="20px" width="100%" padding="20px" margin="30px 30px 30px 30px" backgroundColor={GREY} boxShadow>
            <Branding />
            <Status />
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
              <Active />
            </Flex>
          </Flex>
          <Flex height="100%" width="66%" direction="column">
            <Flex direction="row">
              <Flex borderRadius="20px" padding="20px" height="100px" width="50%" margin="30px 30px 0px 0px" backgroundColor={GREY} boxShadow>
                <Hours />
              </Flex>
              <Flex borderRadius="20px" padding="20px" height="100px" width="50%" margin="30px 0px 0px 0px" backgroundColor={GREY} boxShadow>
                <TitleAndDescription fontSize={28} title="N/A" description="Change since last month" />
              </Flex>
            </Flex>
            <Flex borderRadius="20px" title="Month" padding="20px" height="calc(100% - 160px)" width="100%" margin="0px 0px 0px 0px" backgroundColor={GREY} boxShadow>
              <Breakdown />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Lumen.Provider>
  );
}

export default App;
