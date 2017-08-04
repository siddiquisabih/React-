import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from "./class"


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from "./App"



ReactDOM.render(
  <MuiThemeProvider>
<div>
  <MyAwesomeReactComponent /><br/>
  
  <Button/>
</div>
  </MuiThemeProvider>
  ,

  document.getElementById('root')
);
