import React from 'react'
import { Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

function App() {
    return (
    <div>
        <Route path="/dashboard" component={Dashboard} />
    </div>
    )
}

export default App