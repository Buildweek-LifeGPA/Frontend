import React from "react";
import styled from "styled-components";
import GoogleButton from "react-google-button";
import FacebookLogin from 'react-facebook-login';
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

const GoogleBtn = styled.section`
position: absolute;
width: 320px;
height: 50px;
left: 22px;
top: 66px;
margin-left: 10%;
`;

const FacebookBtn = styled.section`
position: absolute;
width: 320px;
height: 50px;
left: 22px;
top: 130px;
margin-left: 11%;
`;

const Line1 = styled.hr`
position: absolute;
width: 125px;
height: 0px;
left: 22.5px;
top: 213.5px;
border: 1px solid #C4C4C4;
`;

const Line2 = styled.hr`
position: absolute;
width: 124px;
height: 0px;
left: 214px;
top: 213.5px;
border: 1px solid #C4C4C4;
`;

const PTag = styled.section`
position: absolute;
width: 12px;
height: 15px;
left: 176px;
top: 216px;
font-family: Rajdhani;
font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 14px;
text-align: center;
`;

const Email = styled.input`
position: absolute;
width: 321px;
height: 43px;
left: 21px;
top: 247px;
border: 0.5px solid #C4C4C4;
box-sizing: border-box;
border-radius: 2px;
font-family: Rajdhani;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.05em;
`;

const Password = styled.input`
position: absolute;
width: 321px;
height: 43px;
left: 21px;
top: 300px;
border: 0.5px solid #C4C4C4;
box-sizing: border-box;
border-radius: 2px;
font-family: Rajdhani;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.05em;
`;

const ForgotPW = styled.a`
position: absolute;
width: 112px;
height: 16px;
left: 124px;
top: 361px;
font-family: Rajdhani;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
text-align: center;
color: #2F80ED;
`;

const LoginButton = styled.button`
position: absolute;
width: 321px;
height: 50px;
left: 21px;
top: 386px;
background: #FFEB38;
border-radius: 2px;
font-family: Rajdhani;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
text-align: center;
`;

const FooterText = styled.section`
position: absolute;
width: 171px;
height: 29px;
left: 97px;
top: 528px;
font-family: Rajdhani;
font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 14px;
text-align: center;
color: #828282;
`;

export default function LoginScreen() {
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
                    <GoogleBtn>
                        <GoogleButton />
                    </GoogleBtn>
                    <FacebookBtn>
                        <FacebookLogin />
                    </FacebookBtn>
                    <Line1 />
                    <PTag>
                        or
                    </PTag>
                    <Line2 />
                    <Email type="email" placeholder="Email" />
                    <Password type="password" placeholder="Create Password" />
                    <ForgotPW>
                        <Link>Forgot your password?</Link>
                    </ForgotPW>
                    <Link to='/Dashboard'>
                        <LoginButton>
                            LOG IN
                    </LoginButton>
                    </Link>
                </Card>
                <FooterText>
                    By Using GreatHabits you agree to the
                        <br></br>
                    <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>
                </FooterText>
            </OuterContainer>
        </div>
    )
};