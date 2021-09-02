import { render } from 'react-dom';
import React from 'react';
import App from 'App';
import './app.scss';
import styles from './index.module.scss';
import classnames from 'classnames';
import { Global } from '@emotion/react';
import { globalStyles } from 'styles/globalStyles';

render(
  <App
    className={styles.redTitle}
    userName={'Hello'}
    style={{ margin: 20, border: '1px solid black' }}
  >
    <Global styles={globalStyles}></Global>
    <div className="green-title">Green</div>
    <div className={classnames(styles.redTitle, styles.bigFont)}>Red</div>
  </App>,
  document.getElementById('root'),
);
