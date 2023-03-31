import * as React from 'react';
import PropTypes from 'prop-types';
// import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

//component
import FixedSizeList from './List-FixedSize';
import TableFixedHeader from './Table-FixedHeader';
import Card from './Card';
import DialogTitleClose from './DialogTitleClose'
//CSS
import './Dialog.css';
import { Divider } from '@mui/material';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
}));

function TypographyTheme(props) {
  return (
    <>
      <Div>{props.text}</Div> 
      <Divider style={{margin:"0px 15px"}}/>
    </>
  )
}


export default function SimpleDialog(props) {
    
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog 
        onClose={handleClose} 
        open={open}
        fullWidth = {true}
        maxWidth="lg"
        padding = {10}
    >
        <DialogTitleClose  onClose={handleClose} className='dialog-header'>{"수업 "+props.title}</DialogTitleClose>
        <DialogContent className='dialog-body'>
            <Box sx={{ flexGrow: 1 }} style={{paddingTop:20}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Card></Card>
                    </Grid> 
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} style={{paddingTop:20}}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                    <TypographyTheme className="item-label" text="Class Time">수업시간</TypographyTheme>
                    {/* <ComboBox></ComboBox> */}
                    <FixedSizeList></FixedSizeList>
                    </Grid>
                    <Grid item xs={3}>
                    <TypographyTheme className="item-label"  text="Teacher">강사</TypographyTheme>
                    <FixedSizeList></FixedSizeList>
                    </Grid>
                    <Grid item xs={6}>
                    <TypographyTheme className="item-label" text="Schedule">스케줄 상세</TypographyTheme>
                    <TableFixedHeader></TableFixedHeader>
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
