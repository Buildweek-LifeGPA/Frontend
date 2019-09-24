import React from "react";
import styled from "styled-components";
import "../css/CreateAccountStyle.css";

const Title = styled.h3`
color: white
`;

const FooterText = styled.footer`
font-size: 10px;
color: white;
`;

export default function CreateAccount () {
    return (
        <div>
            <Title>Sign up</Title>
            <div className="input-create-account">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Create Password"/>
            </div>
            <button className="create-account-btn">Log in</button>
            <FooterText> By Using GreatHabits you agree to the 
                <br></br>
                <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>
                </FooterText>
        </div>
    );
};