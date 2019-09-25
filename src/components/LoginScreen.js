import React from "react";
import styled from "styled-components";
import { GoogleButton, FaceBookButton, LoginButton } from "../components/button";
import { Link } from "react-router-dom";
require('typeface-rajdhani');

const OuterContainer = styled.section`
position: relative;
width: 360px;
height: 640px;
background: #FFFFFF;
`;

const TitleBox = styled.section`
position: absolute;
width: 360px;
height: 80px;
left: 0px;
top: 0px;
background: #000000;
`;

const Title = styled.section`
position: absolute;
left: 41.39%;
right: 41.39%;
top: 5.78%;
bottom: 90.16%;
font-family: Rajdhani;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 26px;
color: rgba(255, 255, 255, 0.9);
margin-top: 30px;
`;

const Card = styled.section`
position: absolute;
width: 360px;
height: 507px;
left: 0px;
top: 76px;
`;

const Greeting = styled.section`
position: absolute;
left: 33.61%;
right: 33.89%;
top: 27px;
bottom: 80%;
font-family: Rajdhani;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 26px;
color: black;
`;

export default function LoginScreen () {
    return (
        <div>
            <OuterContainer>
                <TitleBox>
                    <Title>
                        Log in
                    </Title>
                </TitleBox>
                <Card>
                    <Greeting>
                        Welcome back
                    </Greeting>
                </Card>
            </OuterContainer>
        </div>
    )
};