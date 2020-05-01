import React from 'react';
import './App.css';
import Navbar from 'components/common/Navbar';
import styled from 'styled-components';
import { laptopMargin } from 'config/Spacing';
import Home from 'components/home/Home';
import About from 'components/about/About';
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
