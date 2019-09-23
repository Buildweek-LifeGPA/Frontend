import React from 'react';
import DailyReport from './button';
import ShowPercents from './percentage';
import ShowDiagramm from './diagramm';
import styled from "styled-components";


const Card = styled.section`
position: absolute;
width: 360px;
height: 482px;
left: 0px;
top: 158px;
background: linear-gradient(180deg, rgba(250, 250, 250, 0) 20.99%, #FAFAFA 100%);
border-radius: 3px;
`;

export default function () {
    return (
        <Card>
            <ShowPercents>
            </ShowPercents>
            <ShowDiagramm>
            </ShowDiagramm>
            <DailyReport>
            </DailyReport>
        </Card>
    )
}