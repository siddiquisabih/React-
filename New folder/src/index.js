import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Azher from "./azher"
// import Todo from "./todo"
import registerServiceWorker from './registerServiceWorker';
// import To from "./Sum"
// import Counter from "./counter"
import Builder from "./builder"
ReactDOM.render(<Builder />, document.getElementById('root'));
registerServiceWorker();
