import styled from "@emotion/styled";
import { Button } from "@mui/material";

interface StyledButtonProps {
    backgroundColor: string
    colors: string
}
const StyledButton = styled(Button)<StyledButtonProps>(({ backgroundColor, colors }) => ({
    backgroundColor: backgroundColor,
    color: colors
}));

export { StyledButton }