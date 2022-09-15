import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '200px',
}));

export default function Blog() {

    const [spend, setSpend]= useState(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <h2 style={{textAlign: 'center'}}>Blog</h2>
            <Grid container spacing={{sm: 1, md: 1}} style={{justifyContent: 'center'}} alignItems="center">
                <Grid item sm={12} md={5} m={1}>
                        <Paper style={{textAlign: 'center', height: '200px'}} elevation={3}>
                        <h3 style={{textAlign: 'center', color: '#04a64b', fontFamily: '"Comic Sans MS", "Comic Sans", monospace'}}>Adresse</h3>
                            <strong>Stiftung Jupident</strong>
                            <br />
                            Jupident 2-22
                            <br />
                            6824 Schlins
                            <br />
                            T. +43 (0) 5524 8271-0
                            <br />
                            F. +43 (0) 5524 8271 50
                            <br />
                            info@abenteuer-ziegenfarm.at
                        </Paper>

                </Grid>
                <Grid item sm={12} md={5} m={1}>
                    <Paper style={{textAlign: 'center', height: '200px'}} elevation={3}>
                        <h3 style={{textAlign: 'center', color: '#04a64b', fontFamily: '"Comic Sans MS", "Comic Sans", monospace'}}>Adresse</h3>
                        <strong>Stiftung Jupident</strong>
                        <br />
                        Kontonummer: 15800
                        <br />
                        BLZ 37461
                        <br />
                        Raiffeisenbank Rankweil
                        <br />
                        IBAN: AT78 3746 1000 0001 5800
                        <br />
                        <Button style={{backgroundColor: '#04a64b', color: 'white'}} onClick={() => {
                            console.log("du hast gespendeon")
                            setSpend(true)
                        }}>Jetzt Spenden</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}