import React from 'react';
import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function DatePickers(props) {
  return (
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
  )
}