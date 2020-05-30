import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './NavBar.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

export default function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const theme = createMuiTheme({
      MuiSwitch: {
          color: "primary"
      }
      .
  })

  return (
    <FormGroup row>
      <FormControlLabel
        control={
            <ThemeProvider theme={theme}>
                <Switch onChange={handleChange} name="checkedB"/>
            </ThemeProvider>
          
        }
      />
    </FormGroup>
  );
}