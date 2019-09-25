import React from 'react';
import styled from 'styled-components';
//import { Link } from "react-router-dom";
import { DropdownExampleClearable, options } from "./DropDown";
import { Dropdown } from 'semantic-ui-react'
require('typeface-rajdhani');

const Elipses = styled.section`
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
left: 165px;
top: 227px;
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

const Card = styled.section`
position: absolute;
width: 360px;
height: 482px;
left: 0px;
top: 158px;
background: linear-gradient(180deg, rgba(250, 250, 250, 0) 20.99%, #FAFAFA 100%);
border-radius: 3px;
`;

const DiagrammBox = styled.section`
position: absolute;
width: 197px;
height: 197px;
left: 82px;
top: 21px;
border-left: 10px solid grey;
border-bottom: 10px solid grey;
border-right: 10px solid #FFEB38;
border-top: 10px solid #FFEB38;
transform:matrix(0.71,0.71,-0.71,0.71,0,0);
box-sizing: border-box;
border-radius: 100px;
`;

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

const CreateButton = styled.section`
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

export default function Dashboard() {
    return (
        <div>
            <Dropdown clearable options={options} selection />
            <Elipses>
                <ElipseOne>
                </ElipseOne>
                <ElipseTwo>
                </ElipseTwo>
                <ElipseThree>
                </ElipseThree>
            </Elipses>
            <Lgpa>
                LGPA
            </Lgpa>

            <Card>
                <DiagrammBox>
                </DiagrammBox>
                <PercantageBox>
                    <Percantage>
                        50
                    </Percantage>
                </PercantageBox>
                <CreateButton>
                    <Rectangle>
                        <ReportText>
                            Begin Daily Report
                        </ReportText>
                    </Rectangle>
                </CreateButton>
            </Card>
        </div>
    )
}
