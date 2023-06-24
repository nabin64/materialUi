import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular:5000,
    fontWeightMedium:6000,
    fontWeightBold:700,
  }

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

