import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes />
            </BrowserRouter>
        </div>
    );
}

export default App;