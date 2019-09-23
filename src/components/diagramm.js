import React from 'react';
import styled from "styled-components";

const DiagrammBox = styled.section`
position: absolute;
width: 197px;
height: 197px;
left: 82px;
top: 21px;
`;

const ReachedDiagramm = styled.section`
border: 10px solid #FFEB38;
box-sizing: border-box;
transform: matrix(-1, 0, 0, 1, 0, 0);
border-radius: 100px;
`;

export default function ShowDiagramm () {
    return (
        <DiagrammBox>
            <ReachedDiagramm>
            </ReachedDiagramm>
        </DiagrammBox>
    )
}