import React, {useState} from 'react';
import Button from "@mui/material/Button";

export default function Contact() {

    const [spend, setSpend] = useState(false);

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Contact</h1>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{border: '1px solid gray', width: '700px'}}>
                    <h3 style={{textAlign: 'center', color: '#04a64b', fontFamily: '"Comic Sans MS", "Comic Sans", monospace'}}>Adresse</h3>
                    <div style={{textAlign: 'center', margin: '10px'}}>
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
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{border: '1px solid gray', width: '700px', margin: '10px'}}>
                   <h3 style={{textAlign: 'center', color: '#04a64b', fontFamily: '"Comic Sans MS", "Comic Sans", monospace'}}>Unser Spendenkonto</h3>
                    <div style={{textAlign: 'center', margin: '10px'}}>
                        <div style={{textAlign: 'center', margin: '10px'}}>
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
                            <Button style={{backgroundColor: '#04a64b', color: 'white', margin: '10px 0px 10px 0px'}} onClick={() => {
                                console.log("du hast gespenden")
                                setSpend(true)
                            }}>Jetzt Spenden</Button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {spend ?
                <div style={{textAlign: 'center'}}>
                    <h1>Danke fürs Spenden</h1>
                    <Button onClick={() => {setSpend(false)}}>Nicht mehr Spenden</Button>
                </div>
                : ""
            }
        </div>
    )
}