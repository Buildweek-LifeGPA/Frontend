import React from 'react';
import styled from 'styled-components';
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
right: 44.44%;
top: 5.94%;
bottom: 90.94%;
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

const TitleOfHabit = styled.input`
position: absolute;
width: 286px;
height: 41px;
left: 30px;
top: 110px;
font-family: Rajdhani;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;
border-style: none;
`;

const BottomLine = styled.hr`
position: absolute;
width: 311px;
height: 0px;
left: 27.5px;
top: 145.5px;
border: 2px solid #9B51E0;
`;

const LeftLine = styled.hr`
position: absolute;
width: 0px;
height: 24px;
left: 25px;
top: 109.5px;
border: 1px solid #FFEB38;
`;

const AddHabit = styled.button`
position: absolute;
width: 286px;
height: 41px;
left: 54px;
top: 320px;
font-family: Rajdhani;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;
text-align: right;
color: #BDBDBD;
background:none;
border:none;
`;

export default function CreateHabit(props) {
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
                    Create a habit
                </Title>
                <TitleOfHabit type="text" placeholder="Title of Habit" />
                <LeftLine />
                <BottomLine />
                <AddHabit>
                    ADD HABIT
                </AddHabit>
            </OuterContainer>
        </div>
    )
}