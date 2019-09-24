import React from "react";
import styled from "styled-components";


const P = styled.p`

`;

const BtnContainer = styled.div`
display: flex;
flex-direction: column;
`;

const CustomButton = styled.button`
margin-top: 5%;
margin-left: 10%;
margin-right: 10%;
padding: 3%;
`;

const CreateBtn = styled.button`
background-color: yellow;
margin-top: 5%;
margin-left: 10%;
margin-right: 10%;
padding: 3%;
`;

export default function LaunchScreen () {
    return (
        <div>
           <img src="src/images/LifeGPALogo.png" alt="A logo of life GPA"/>
           <P>Welcome to the new you!</P>
           <BtnContainer>
           <CreateBtn>CREATE ACCOUNT</CreateBtn>
           <CustomButton>LOGIN IN</CustomButton>
           </BtnContainer>
       </div>

    );
};