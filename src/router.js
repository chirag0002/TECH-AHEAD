import React from 'react';
import { Route, ReactLocation } from 'react-location';
import App from './App';
import Navbar from './Components/Navbar';
// import Footer from './containers/footer/Footer';
// import Ai from './components/Technologies/Ai';
// import BlockChain from './components/Technologies/BlockChain';

export const routes: Route[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'nav',
    element: <Navbar />,
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

