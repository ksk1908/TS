import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SimpleDialog(props) {
    
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'gray',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <Dialog 
        onClose={handleClose} 
        open={open}
        fullWidth = {true}
        maxWidth="lg"
        padding = {10}
    >
        <DialogTitle>수업 {props.title}</DialogTitle>
        <DialogContent style={{paddingTop:20}}>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" style={{backgroundColor:'white', paddingRight : 6}}>스케줄</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Age"
                        // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>강사</Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>스케줄 상세</Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>배정 확정</Item>
                    </Grid>
                </Grid>
            </Box>
        </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
