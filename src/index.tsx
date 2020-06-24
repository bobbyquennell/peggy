import ReactDOM from 'react-dom';
import React from 'react';
import App from 'App';
import './app.css';
// TODO: enable esmodule syntax for css files: import { redTitle } from './index.module.css'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { redTitle } = require('./index.module.css');

ReactDOM.render(
  // TODO: should be able to apply className on App component
  <App userName={'Peggy'}>
    <div className="green-title">Green</div>
    <div className={redTitle}>Red</div>
  </App>,
  document.querySelector('body'),
);
