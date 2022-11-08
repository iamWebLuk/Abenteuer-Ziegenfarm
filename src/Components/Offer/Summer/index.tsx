import {Box, Button, Card, CardActions, CardContent, Grid, Paper, Typography} from '@mui/material';
import React from 'react';
import Brot from "../../../images/brot.jpg";
import ChildrenSummer from "../../../images/chlidren-summer.jpg";
import Ziege from '../../../images/ziege.jpg';
import Verstecken from '../../../images/verstecken.jpg';
import Puzzle from '../../../images/puzzle.jpg';
import Fangen from '../../../images/fangen.jpg';
import Sleep from '../../../images/sleep.jpg'

const Summer = () => {

    return(
        <div style={{textAlign: 'center'}}>

            <h4>Unsere Sommer Angebote:</h4>
            <br />
            <Grid container spacing={{sm: 1, md: 1}} style={{justifyContent: 'center'}} alignItems="center">
                <Grid item sm={12} md={3} m={1}>
                    <Paper elevation={4}>
                        <h3>Brot Backen</h3>
                        <img src={Brot} alt={"abc"} width='70%' height='60%'/>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={3} m={1}>
                    <Paper elevation={4}>
                        <h3>Ziegen Streicheln</h3>
                        <img src={Ziege} alt={"abc"} width='70%' height='60%'/>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={3} m={1}>
                    <Paper elevation={4}>
                        <h3>Fangen spielen</h3>
                        <img src={Fangen} alt={"abc"} width='70%' height='60%'/>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={3} m={1}>
                    <Paper elevation={4}>
                        <h3>Puzzle bauen</h3>
                        <img src={Puzzle} alt={"abc"} width='70%' height='60%'/>
                    </Paper>
                </Grid>

                <Grid item sm={12} md={3} m={1}>
                    <Paper elevation={4}>
                        <h3>Verstecken spielen</h3>
                        <img src={Verstecken} alt={"abc"} width='70%' height='60%'/>
                    </Paper>
                </Grid>
                <Grid item sm={12} md={3} m={1}>
                    <Paper elevation={4}>
                        <h3>Mittagsschlaf</h3>
                        <img src={Sleep} alt={"abc"} width='70%' height='60%'/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default Summer;