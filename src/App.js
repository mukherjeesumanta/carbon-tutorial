import React, { Component } from 'react';
import { Content, Theme } from '@carbon/react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

import './app.scss';
class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <BrowserRouter>
          <Content>
            <Switch>
              <Route path="/repos" component={RepoPage} />
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </Content>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
