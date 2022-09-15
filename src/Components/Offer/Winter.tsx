import React from 'react';
import {Grid, Paper} from "@mui/material";

export default function Winter() {
    return(
        <div style={{textAlign: 'center'}}>

            <h4>Unsere Winter Angebote:</h4>
            <br />
            Brot Backen
            <br />
            Ziegen Streicheln
            <br />
            Schneemann bauen
            <br />
            Schneeball Schlacht
            <br />

            <br />

            <br />

            <br />
                <Grid container spacing={{sm: 1, md: 1}} style={{justifyContent: 'center'}} alignItems="center">
                        <Grid item sm={12} md={5} m={1}>
                                <Paper elevation={4}>
                                        Brot Backen
                                </Paper>
                        </Grid>
                        <Grid item sm={12} md={5} m={1}>
                                <Paper elevation={4}>
                                        Ziegen Streicheln
                                </Paper>
                        </Grid>
                        <Grid item sm={12} md={5} m={1}>
                                <Paper elevation={4}>
                                        Schneemann bauen
                                </Paper>
                        </Grid>
                        <Grid item sm={12} md={5} m={1}>
                                <Paper elevation={4}>
                                        Schneeball Schlacht
                                </Paper>
                        </Grid>
                        <Grid item sm={12} md={5} m={1}>
                                <Paper elevation={4}>
                                        Rodeln
                                </Paper>
                        </Grid>
                        <Grid item sm={12} md={5} m={1}>
                                <Paper elevation={4}>
                                        Nappen
                                </Paper>
                        </Grid>
                </Grid>
        </div>
    );
}
