import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
require('typeface-rajdhani');

const OuterContainer = styled.section`
position: absolute;
width: 360px;
height: 640px;
left: 0px;
top: 0px;
background: #000000;
`;

const P = styled.section`
position: absolute;
left: 21.67%;
right: 20.83%;
top: 51.72%;
bottom: 44.22%;
font-family: Rajdhani;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 26px;
color: #C4C4C4;
`;

const CreateAccount = styled.button`
position: absolute;
width: 268px;
height: 47px;
left: 44px;
top: 498px;
background: #FFEB38;
border-radius: 3px;
font-family: Rajdhani;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #000000;
`;

const LoginButton = styled.button`
position: absolute;
width: 268px;
height: 47px;
left: 44px;
top: 559px;
background: #FFFFFF;
border: 1px solid #4F4F4F;
box-sizing: border-box;
border-radius: 3px;
font-family: Rajdhani;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #000000;
`;

export default function LaunchScreen() {
    return (
        <div>
            <OuterContainer>
                <img src="src/images/LifeGPALogo.png" alt="A logo of life GPA" />
                <P>Welcome to the new you!</P>
                <Link to='/create-account'>
                    <CreateAccount>
                        CREATE ACCOUNT
                </CreateAccount>
                </Link>
                <Link to = '/login-screen'>
                    <LoginButton>
                        LOGIN IN
                </LoginButton>
                </Link>
            </OuterContainer>
        </div>
    );
};