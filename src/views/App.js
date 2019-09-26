import React from 'react'
import { Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import LoginScreen from '../components/LoginScreen';
import LaunchScreen from '../components/LaunchScreen';
import CreateAccount from '../components/CreateAccount';
import ListOfHabits from '../components/ListOfHabits';
import CreateHabit from '../components/CreateHabit';

function App() {
    return (
    <div>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={LaunchScreen}/>
        <Route path="/login-screen" component={LoginScreen}/>
        <Route path="/create-account" component={CreateAccount} />
        <Route path="/ListOfHabits" component={ListOfHabits} />
        <Route path="/Create-Habit" component={CreateHabit} />
    </div>
    )
}

export default App