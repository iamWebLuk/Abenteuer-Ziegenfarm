import React from 'react';
import { StyledButton } from "./style";


interface CloseButtonProps {
    backgroundColor: string,
    color: string,
    text: string
    handleClick: () => void
}

const CloseButton = ({ backgroundColor, color, text, handleClick }:CloseButtonProps) => {

    return (
        <StyledButton backgroundColor={backgroundColor} colors={color} onClick={handleClick}>
            {text}
        </StyledButton>
    )
}

export default CloseButton;