import Home from './Home';
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
var root = document.getElementById('root');
const theme = createMuiTheme({ palette: {primary: grey}});

import Legco from './Legco';

if (root) {
  ReactDOM.render(
   <MuiThemeProvider theme={theme}>
     <Home/>
   </MuiThemeProvider>
  , root);
}
