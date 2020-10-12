import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.token));

    return (
        <div className="App">
            <BrowserRouter>
                <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Routes setIsLoggedIn={setIsLoggedIn} />
            </BrowserRouter>
        </div>
    );
}

export default App;