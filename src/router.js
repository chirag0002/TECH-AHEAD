import React from 'react';
import { Route, ReactLocation } from 'react-location';
import App from './App';
import Blockchain from './Components/BlockChain';
import Headder from './Components/Header';


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
    path: '/blockchain',
    element: <Blockchain />,
  },
  {
    path: '/headder',
    element: <Headder />,
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

