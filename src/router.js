import React from 'react';
import { Route, ReactLocation } from 'react-location';
import App from './App';
// import Footer from './containers/footer/Footer';
// import Ai from './components/Technologies/Ai';
// import BlockChain from './components/Technologies/BlockChain';

export const routes: Route[] = [
  {
    path: '/',
    element: <App />,
  },
  // {
  //   path: 'check',
  //   element: <Footer />,
  // },
  // {
  //   path: 'ai',
  //   element: <Ai />,
  // },
  // {
  //   path: 'blockchain',
  //   element: <BlockChain />,
  // },
];
export const location = new ReactLocation();

