import React from 'react'
import { Route } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';

function App() {
    return (
    <div>
        <Route path="/login-screen" component={LoginScreen}/>
    </div>
    )
}

export default App