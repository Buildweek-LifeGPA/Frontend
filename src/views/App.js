import React from 'react';
import styled from "styled-components";
import { Route } from "react-router-dom";
import Elipses from '../components/elipses';
import Card from '../components/card';

require('typeface-rajdhani');

const ScreenSize = styled.section`
position: relative;
width: 360px;
height: 640px;
background: #FFFFFF;
`;

function App() {
    return (
        <ScreenSize>
            <Route component={Elipses}/>
            <Route component={Card}/>
        </ScreenSize>
    )
}

export default App