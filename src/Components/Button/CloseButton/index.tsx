import React from 'react';
import { StyledButton } from "./style";


interface CloseButtonProps {
    backgroundColor: string,
    color: string,
    text: string
}

const CloseButton = ({ backgroundColor, color, text }:CloseButtonProps) => {

    const buttonClick = () => {
        console.log("button is clicked")
    }

    return (
        <StyledButton backgroundColor={backgroundColor} colors={color} onClick={buttonClick}>
            {text}
        </StyledButton>
    )
}

export default CloseButton;