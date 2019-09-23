import React from 'react';
import styled from "styled-components";

const ElipseGroup = styled.section`
position: absolute;
width: 30px;
height: 6px;
left: 169px;
top: 47px;
`;

const ElipseOne = styled.section`
position: absolute;
width: 6px;
height: 6px;
background: #4F4F4F;
border-radius: 100%;
`;

const ElipseTwo = styled.section`
position: absolute;
width: 6px;
height: 6px;
left: 12px;
background: #4F4F4F;
border-radius: 100%;
`;

const ElipseThree = styled.section`
position: absolute;
width: 6px;
height: 6px;
left: 24px;
background: #4F4F4F;
border-radius: 100%;
`;

const Lgpa = styled.section`
position: absolute;
width: 110px;
height: 21px;
top: 180px;
font-family: Rajdhani;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
display: flex;
align-items: center;
text-align: center;
color: #4F4F4F;

`;

function Elipses() {
    return (
        <ElipseGroup>
            <ElipseOne>
            </ElipseOne>
            <ElipseTwo>
            </ElipseTwo>
            <ElipseThree>
            </ElipseThree>
            <Lgpa>
                LGPA
            </Lgpa>
        </ElipseGroup>
    )
}

export default Elipses;