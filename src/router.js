import React from 'react';
import { Route, ReactLocation } from 'react-location';
import App from './App';
import DevOps from './DevOps/DevOps'
import Blockchain from './Components/BlockChain';
import Ai from './Components/Artificial-Intelligence/Ai';
import About from './Components/About'
import Login from './Components/Login'


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
   {
    path: 'about',
    element: <About />,
  },
  {
   path: 'login',
    element: <Login />, 
  }
];
export const location = new ReactLocation();

