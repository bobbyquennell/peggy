import ReactDOM from 'react-dom';
import React from 'react';
import App from 'App';
import './app.css';
// TODO: enable esmodule syntax for css files: import { redTitle } from './index.module.css'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { redTitle } = require('./index.module.css');

ReactDOM.render(
  <App
    className={redTitle}
    userName={'Peggy'}
    style={{ margin: 20, border: '1px solid black', display: 'flex' }}
  >
    <div className="green-title">Green</div>
    <div className={redTitle}>Red</div>
  </App>,
  document.querySelector('body'),
);
