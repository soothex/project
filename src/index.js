import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppRouter} from './App';
import * as serviceWorker from './serviceWorker';

import Store from './Store';

const appStore = new Store();

ReactDOM.render(<AppRouter store={appStore}/>, document.getElementById('root'));

serviceWorker.unregister();
