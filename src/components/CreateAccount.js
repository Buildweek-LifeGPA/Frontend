import React, { useState } from "react";
import styled from "styled-components";
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

const FullName = styled.input`
position: absolute;
width: 321px;
height: 43px;
left: 21px;
top: 25px; 
`;

const Email = styled.input`
position: absolute;
width: 321px;
height: 43px;
left: 21px;
top: 78px;
`;

const Password = styled.input`
position: absolute;
width: 321px;
height: 43px;
left: 21px;
top: 131px;
`;

const CreateAccountButton = styled.button`
position: absolute;
width: 321px;
height: 50px;
left: 21px;
top: 198px;
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
top: 264px;
font-family: Rajdhani;
font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 14px;
text-align: center;
`;

export default function CreateAccount() {
    const [username, setUsername] = useState("");
    return (
        <div>
            <OuterContainer>
                <TitleBox>
                    <Title>Sign up</Title>
                </TitleBox>
                <Card>
                    <FullName type="text" placeholder="Name" />
                    <Email type="email" placeholder="Email" />
                    <Password type="password" placeholder="Create Password" />
                    <Link to='/Dashboard'>
                        <CreateAccountButton>
                            Log in
                    </CreateAccountButton>
                    </Link>
                    <FooterText>
                        By Using GreatHabits you agree to the
                        <br></br>
                        <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>
                    </FooterText>
                </Card>

            </OuterContainer>
        </div>
    );
};