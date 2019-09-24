import React from 'react'
import { Route } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';
import LaunchScreen from '../components/LaunchScreen';
import CreateAccount from '../components/CreateAccount';

function App() {
    return (
    <div>
        <Route exact path="/" component={LaunchScreen}/>
        <Route path="/login-screen" component={LoginScreen}/>
        <Route path="/create-account" component={CreateAccount} />
    </div>
    )
}

export default App