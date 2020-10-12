import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.token));

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
    }

    const login =() => {
        setIsLoggedIn(true);
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Nav isLoggedIn={isLoggedIn} logout={logout} />
                <Routes login={login} />
            </BrowserRouter>
        </div>
    );
}

export default App;