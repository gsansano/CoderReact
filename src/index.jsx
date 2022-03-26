import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import getFirestoreApp from './firebase/config';


getFirestoreApp()
ReactDOM.render(

  <App />,
  document.getElementById('root')
);

