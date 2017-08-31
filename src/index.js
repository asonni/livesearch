import React from 'react';
import ReactDOM from 'react-dom';

import LiveSearch from './components/LiveSearch';
import registerServiceWorker from './registerServiceWorker';
import sports from './sports.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

ReactDOM.render(
  <LiveSearch sports={sports} />,
  document.getElementById('root')
);
registerServiceWorker();
