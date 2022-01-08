import React from 'react';
import { Route, ReactLocation } from 'react-location';
import App from './App';
import DevOps from './Components/DevOps/DevOps'
import Blockchain from './Components/BlockChain';
import Ai from './Components/Artificial-Intelligence/Ai';


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
    path: 'devops',
    element: <DevOps />,
  },
];
export const location = new ReactLocation();

