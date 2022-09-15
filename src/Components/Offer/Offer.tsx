import {Box, Button, Grid, Paper} from '@mui/material';
import React, {useEffect, useRef, useState} from 'react';
import Children from '../../images/children.jpg'
import ChildrenSummer from  '../../images/chlidren-summer.jpg'
import { useHover } from "usehooks-ts";
import Summer from "./Summer";
import Winter from './Winter';

export default function Offer() {

    const hoverRefSummer = useRef(null);
    const isHoverSummer = useHover(hoverRefSummer);
    const hoverRefWinter = useRef(null);
    const isHoverWinter = useHover(hoverRefWinter)

    const [isShown, setIsShown] = useState("summer");

useEffect(() => {

}, [])

    const handleClick = (season: string) => {
        setIsShown(season);
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <h2 style={{textAlign: 'center'}}>Offer</h2>
                <Grid container spacing={{sm: 1, md: 1}} style={{justifyContent: 'center'}} alignItems="center">
                    <Grid item sm={12} md={5} m={1} ref={hoverRefSummer} onClick={() => handleClick("summer")}>
                        <Paper style={{textAlign: 'center', height: '500px'}} elevation={isHoverSummer ? 8 : 1} >
                            <h3 style={{textAlign: 'center', color: '#04a64b', fontFamily: '"Comic Sans MS", "Comic Sans", monospace'}}>Summer</h3>
                            <img src={ChildrenSummer} alt={"abc"} width='90%' height='85%'/>
                        </Paper>

                    </Grid>
                    <Grid item sm={12} md={5} m={1} ref={hoverRefWinter} onClick={() => handleClick("winter")}>
                        <Paper style={{textAlign: 'center', height: '500px'}} elevation={isHoverWinter ? 8 : 1}>
                            <h3 style={{textAlign: 'center', color: '#04a64b', fontFamily: '"Comic Sans MS", "Comic Sans", monospace'}}>Winter</h3>
                            <img src={Children} alt={"abc"} width='90%' height='85%'/>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            {isShown === "summer" ? <Summer /> : <Winter />}
        </div>
    );
}