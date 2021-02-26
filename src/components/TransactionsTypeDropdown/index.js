import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function TransactionsTypeDropdown(props) {
    //const classes = useStyles();

return (
        <FormControl>
          <InputLabel>Age</InputLabel>
            <Select>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        )
};