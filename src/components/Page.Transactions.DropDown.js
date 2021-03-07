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
          <InputLabel>Transaction Type</InputLabel>
            <Select>
              <MenuItem value={10}>Deposit</MenuItem>
              <MenuItem value={20}>Conversion</MenuItem>
              <MenuItem value={30}>Transfer</MenuItem>
          </Select>
        </FormControl>
        )
};