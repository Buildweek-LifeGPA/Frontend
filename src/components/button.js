import React from 'react';
import styled from "styled-components";

const Button = styled.section`
position: absolute;
width: 342px;
height: 41px;
left: 9px;
top: 375px;
`;

const Rectangle = styled.section`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: #FFEB38;
border-radius: 4px;
`;

const ReportText = styled.section`
position: absolute;
left: 31.29%;
right: 27.78%;
top: 0%;
bottom: 0%;
font-family: Rajdhani;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
text-align: center;
`;

export default function DailyReport() {
    return (
        <Button>
            <Rectangle>
                <ReportText>
                    Begin Daily Report
                </ReportText>
            </Rectangle>
        </Button>
    )
}