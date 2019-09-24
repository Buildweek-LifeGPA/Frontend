import React from 'react'
import { Route } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';
import LaunchScreen from '../components/LaunchScreen';

function App() {
    return (
    <div>
        <Route exact path="/" component={LaunchScreen}/>
        <Route path="/login-screen" component={LoginScreen}/>
    </div>
    )
}

export default App