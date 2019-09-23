import React from "react";
import styled from "styled-components";


//Google Button
const GoogleBtn = styled.button`
font-size: 1.6rem;
border: black 1px;
text-align: center;
margin-left: 20%; 
margin-top: 10%;
margin-bottom: 5%;
`;


export function GoogleButton () {
    return (
        <div>
            <GoogleBtn>Sign In With Google</GoogleBtn>
        </div>
    );
};


//FaceBook Button
const FaceBookBtn = styled.button`
font-size: 1.6rem;
border: blue 1px;
text-align: center;
margin-left: 20%; 
margin-top: 10%;
margin-bottom: 5%;
`;


export function FaceBookButton () {
    return (
        <div>
            <FaceBookBtn>Sign In With FaceBook</FaceBookBtn>
        </div>
    );
};

//Log in Button

const LoginBtn = styled.button`
font-size: 1.6rem;
border: yellow 1px;
text-align: center;
margin-left: 20%; 
margin-top: 10%;
margin-bottom: 5%;
`;

export function LoginButton () {
    return (
        <div>
            <LoginBtn>LOG IN</LoginBtn>
        </div>
    );
};