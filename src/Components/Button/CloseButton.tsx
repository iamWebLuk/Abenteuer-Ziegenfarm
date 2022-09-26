import React from 'react';
import Button from "@mui/material/Button";

interface Props {
    backgroundColor: string,
    color: string,
    text: string
}

export default function CloseButton ({ backgroundColor, color, text }:Props) {

    const ButtonClick = () => {
        console.log("button is clicked")
    }

return (
    <Button style={{backgroundColor: backgroundColor, color: color}}
    onClick={ButtonClick}>
        {text}
    </Button>
)
}