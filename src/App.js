import React from 'react';
import './App.css';
import Desktop from './views/Desktop';
import Mobile from './views/Mobile';


const App = () => {
  return (
    <React.Fragment>
      <Desktop />
      <Mobile />
    </React.Fragment>
  );
}

export default App;
