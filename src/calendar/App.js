import React from 'react';
import './App.css';
import Navbar from 'calendar/components/common/Navbar';
import styled from 'styled-components';
import { laptopMargin } from 'calendar/config/Spacing';
import Home from 'calendar/components/home/Home';
import About from 'calendar/components/about/About';
import { HashRouter, Route, Switch } from 'react-router-dom';

const AppContainer = styled.div`
  margin: 0 ${laptopMargin}px;
`;

const App = () => (
  <AppContainer>
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  </AppContainer>
);

export default App;
