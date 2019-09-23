import React from "react";
import styled from "styled-components";
import { GoogleButton, FaceBookButton, LoginButton } from "../components/button";
import { Link } from "react-router-dom";


//styled components
const Header = styled.h3`
padding-top: 5%;
padding-bottom: 3%;
text-align: center;
background-color: black;
color: white;
`;

const Title = styled.h2`
text-align: center;
`;

const EmailText = styled.input`
width: 100%;
text-align: center;
`;

const PasswordText = styled.input`
width: 100%;
margin-top: 10%;
text-align: center;
`;


export default function LoginScreen () {
    return (
        <div>
            <Header>Log in</Header>
            <Title>Welcome back</Title>
                <GoogleButton />
                <FaceBookButton />
                <br></br>
                <hr></hr>
                <br></br>
            
            <EmailText type="text" placeholder="Email" />
            <PasswordText type="text" placeholder="Password"/>
                <Link>Forgot your password?</Link>
            <LoginButton/>
        </div>
    )
};