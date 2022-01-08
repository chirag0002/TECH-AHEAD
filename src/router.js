import React from 'react';
import { Route, ReactLocation } from 'react-location';
import App from './App';
import DevOps from './Components/DevOps/DevOps'
import Blockchain from './Components/BlockChain';
import Headder from './Components/Header';


import Navbar from './Components/Navbar';
// import Footer from './containers/footer/Footer';
import Ai from './Components/Artificial-Intelligence/Ai';
// import BlockChain from './components/Technologies/BlockChain';

export const routes: Route[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path:'ai',
    element:<Ai />,
  },
  {
    path: 'blockchain',
    element: <Blockchain />,
  },
  {
<<<<<<< HEAD
    path: '/headder',
    element: <Headder />,
  },
  {
    path: 'nav',
    element: <Navbar />,
=======
    path: 'devops',
    element: <DevOps />,
>>>>>>> upstream/main
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

