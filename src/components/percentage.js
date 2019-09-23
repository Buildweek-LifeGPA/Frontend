import React from 'react';
import styled from "styled-components";

const PercantageBox = styled.section`
position: absolute;
width: 50px;
height: 64px;
left: 155px;
top: 90px;
`;

const Percantage = styled.section`
font-family: Rajdhani;
font-style: normal;
font-weight: normal;
font-size: 50px;
line-height: 64px;
display: flex;
align-items: center;
text-align: center;
color: #4F4F4F;
`;

export default function ShowPercents() {
    return(
        <PercantageBox>
            <Percantage>
                50
            </Percantage>
        </PercantageBox>
    )
}