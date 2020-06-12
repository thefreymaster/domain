import React from 'react';
import './App.css';
import { Layout } from 'antd';
import io from 'socket.io-client';


import Container from './common/Container';
import Flex from './common/Flex';
import Branding from './components/Branding';

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

  React.useLayoutEffect(() => {
    socket.on('groups_update', (data) => {
      console.log(data)
    })
  }, [])

  return (
    <Container backgroundColor="#353535">
      <Flex width="20%">
        <Flex width="100%" padding="20px" margin="30px 30px 30px 30px" borderRadius backgroundColor={GREY} boxShadow>
          <Branding />
        </Flex>
      </Flex>
      <Flex width="80%" margin="30px 30px 30px 0px">
        <Flex height="100%" width="33%" margin="0px 30px 0px 0px" direction="column">
          <Flex title="Usage" padding="20px" height="100px" width="100%" backgroundColor={GREY} boxShadow>
            USAGE GAL
          </Flex>
          <Flex padding="20px" height="calc(50% - 80px)" width="100%" margin="30px 30px 30px 0px" backgroundColor={GREY} boxShadow>

          </Flex>
          <Flex padding="20px" height="calc(50% - 80px)" width="100%" backgroundColor={GREY} boxShadow>

          </Flex>
        </Flex>
        <Flex height="100%" width="66%" direction="column">
          <Flex direction="row">
            <Flex padding="20px" height="100px" width="50%" margin="0px 30px 30px 0px" backgroundColor={GREY} boxShadow>
              USAGE HR
            </Flex>
            <Flex padding="20px" height="100px" width="50%" margin="0px 0px 0px 0px" backgroundColor={GREY} boxShadow>
              USAGE %/MONTH
            </Flex>
          </Flex>
          <Flex padding="20px" height="100%" width="100%" margin="0px 0px 0px 0px" backgroundColor={GREY} boxShadow>
            USAGE %/MONTH
          </Flex>
        </Flex>

      </Flex>
    </Container>
  );
}

export default App;
