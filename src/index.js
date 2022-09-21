import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state  from './state/store';



const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderTree = (store) =>{
  root.render(
    <React.StrictMode>
      <App state={state} dispatch = {state.dispatch.bind(state)}/>
    </React.StrictMode>
  );
}
rerenderTree(state);
state.subscribe(rerenderTree)



