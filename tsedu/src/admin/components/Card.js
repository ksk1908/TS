import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Grid} from '@mui/material';

import InputBox from './InputBox-UnderLine'


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 100 }}>
        <Grid container>
            <Grid item xs={11}>
                <CardContent>
                <Grid container>
                    <Grid item xs={3}>
                    <InputBox label="학생명"></InputBox>
                    </Grid>
                    <Grid item xs={3}>
                    <InputBox label="강사명"></InputBox>
                    </Grid>
                    <Grid item xs={3}>
                    <InputBox label="배정수업시간"></InputBox>
                    </Grid>
                    <Grid item xs={3}>
                    <InputBox label="코스"></InputBox>
                    </Grid>
                </Grid>

                </CardContent>
            </Grid>
            <Grid item xs={1} style={{alignSelf:'center'}}>
                <CardActions style={{justifyContent:'center'}}>
                    <Button variant="contained">배정</Button>
                </CardActions>
            </Grid>
        </Grid>
    </Card>
  );
}