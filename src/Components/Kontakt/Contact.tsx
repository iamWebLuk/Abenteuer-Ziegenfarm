import React, {useState} from 'react';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from '@mui/material';

export default function Contact() {

    const [spend, setSpend] = useState(false);

    const number: number = 1;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <h2 style={{textAlign: 'center'}}>Contact</h2>
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
                        <br />
                        {number}
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
                        {spend ?
                            <div style={{textAlign: 'center'}}>
                                <h1>Danke fürs Spenden</h1>
                                <Button onClick={() => {setSpend(false)}}>Nicht mehr Spenden</Button>
                            </div>
                            : ""
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}