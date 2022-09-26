import React, {useState} from 'react';
import {
    Avatar,
    Box, Button, Checkbox,
    Container,
    CssBaseline, FormControl,
    FormControlLabel, FormHelperText,
    Grid, Input, InputLabel, Link,
    Paper,
    TextField,
    Typography
} from "@mui/material";


interface User {
    firstName: string,
    lastName: string,
    email: string,
    address: string,
}

export default function Register() {


    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("")
    const [plz, setPlz] = useState("")
    const [city, setCity] = useState("")


    var regex =  RegExp(/^[^ ]+@[^]+\.[a-z]{2,3}$/);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log({
            firstName: data.get('firstName'),
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    const emailValidation = (email: string) => {
        return regex.test(email);
    }

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Dein Kind will also ein Teil unseres Programmes sein?
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={firstName==""}
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Vorname"
                                    autoFocus
                                    onChange={(e) => {
                                        setFirstName(e.target.value)
                                        console.log(firstName + " firstname")
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={lastName==""}
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="Nachname"
                                    autoComplete="family-name"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={!emailValidation(email)}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        emailValidation(email)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={address==""}
                                    required
                                    fullWidth
                                    name="straße"
                                    label="Straße"
                                    id="straße"
                                    autoComplete="new-password"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={plz==""}
                                    required
                                    fullWidth
                                    name="plz"
                                    label="Postleitzahl"
                                    id="pls"
                                    autoComplete="new-password"
                                    onChange={(e) => setPlz(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={city==""}
                                    required
                                    fullWidth
                                    name="stadt"
                                    label="Stadt"
                                    id="stadt"
                                    autoComplete="new-password"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => {
                                console.log(firstName)
                                console.log(lastName)
                                console.log(email)
                                console.log(address);
                            }}
                            disabled={firstName == "" || lastName == "" || email == "" || address == "" || plz == "" || city == ""}
                            // disabled={!emailValidation(email)}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
}