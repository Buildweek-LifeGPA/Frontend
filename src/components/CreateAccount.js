import React from "react";
import styled from "styled-components";

const Title = styled.h3`

`;

const FooterText = styled.footer`
font-size: 10px;
color: white;
`;

const InputWrapper = styled.div`
display: flex;
flex-direction: column;
margin: 0 30%;
`;

const InputTag = styled.input`
margin-top: 5%; 
`;

const CreateAccountButton = styled.button`
background-color: yellow;
`;

export default function CreateAccount () {
    return (
        <div>
            <Title>Sign up</Title>
            <InputWrapper>
            <InputTag type="text" placeholder="Name"/>
            <InputTag type="text" placeholder="Email"/>
            <InputTag type="password" placeholder="Create Password"/>
            </InputWrapper>
            <CreateAccountButton>Log in</CreateAccountButton>
            <FooterText> By Using GreatHabits you agree to the 
                <br></br>
                <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>
                </FooterText>
        </div>
    );
};