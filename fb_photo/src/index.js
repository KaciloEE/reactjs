import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />    
  </Provider>  
  , document.getElementById('root'));

registerServiceWorker();
