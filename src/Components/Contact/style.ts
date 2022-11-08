import { styled } from "@mui/material/styles";
import {Paper} from "@mui/material";

const AddressHeader = styled('h3')(({ theme }) => ({
    textAlign: 'center',
    color: '#04a64b',
    fontFamily: '"Comic Sans MS", "Comic Sans", monospace'
}))

const ContactPaper = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    height: '200px'
}))

export { AddressHeader, ContactPaper }