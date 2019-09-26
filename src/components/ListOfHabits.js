import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
require('typeface-rajdhani');

const OuterContainer = styled.section`
position: relative;
width: 360px;
height: 640px;
`;

const Title = styled.section`
position: absolute;
left: 15%;
right: 53.06%;
top: 5.46%;
bottom: 91.69%;
font-family: Rajdhani;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 26px;
`;

const Arrow = styled.section`
position: absolute;
width: 16px;
height: 16px;
left: 16px;
top: 38px;
`;


const EnterBox = styled.section`
position: absolute;
width: 361px;
height: 56px;
left: calc(50% - 361px/2 + 0.5px);
bottom: 0px;
border-top: 1px solid lightgrey;
`;

const EnterNewHabit = styled.text`
position: absolute;
width: 180px;
height: 42px;
left: calc(50% - 180px/2 - 63px);
bottom: 9px;
font-family: Rajdhani;
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 19px;
display: flex;
align-items: center;
color: #4F4F4F;
`;

const AddHabit = styled.button`
position: absolute;
width: 43px;
height: 43px;
left: calc(50% - 43px/2 + 135.5px);
bottom: 9px;
background: #9B51E0;
border-radius: 100%;
`;

export default function ListOfHabits(props) {
    function back() {
        return props.history.goBack()
    };
    return (
        <div>
            <OuterContainer>
                <Arrow>
                    <ArrowBackIcon onClick={back} />
                </Arrow>
                <Title>
                    My habits
            </Title>
                <EnterBox>
                    <EnterNewHabit>
                        Enter new Habit ...
                    </EnterNewHabit>
                    <Link to='/Create-Habit'>
                        <AddHabit>
                            +
                    </AddHabit>
                    </Link>
                </EnterBox>
            </OuterContainer>
        </div>
    )
}