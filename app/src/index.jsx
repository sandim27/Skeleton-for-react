import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../src/containers/App';

import FirstPage from './containers/FirstPage';
import SecondPage from './containers/SecondPage';

import '../index.html';
import './components/_typography.scss';
import '../assets/iconStyles/icons.css';

/**
 * Bootstrap React Application
 * @returns {void}
 */
function bootstrap() {
  ReactDOM.render(
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/" exact component={FirstPage} />
          <Route path="/2" component={SecondPage} />
        </Switch>
      </App>
    </BrowserRouter>,
    document.getElementById('app')
  );
}

bootstrap();
