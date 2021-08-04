import ReactDOM from 'react-dom';
import React from 'react';
import App from 'App';
import './app.css';
import styles from './index.module.css';

ReactDOM.render(
  <App
    className={styles.redTitle}
    userName={'Hello'}
    style={{ margin: 20, border: '1px solid black', display: 'flex' }}
  >
    <div className="green-title">Green</div>
    <div className={styles.redTitle}>Red</div>
  </App>,
  document.querySelector('body'),
);
