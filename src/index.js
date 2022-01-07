import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Outlet } from 'react-location';

import './index.css';

// eslint-disable-next-line import/named
import { routes, location } from './router';

ReactDOM.render(<Router routes={routes} location={location}> <Outlet /></Router>, document.getElementById('root'));
