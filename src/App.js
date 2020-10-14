import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Routes from './Routes';
import Api from './Api';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.token));
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        if(isLoggedIn) {
            const user = Api.getUser(localStorage.token);
            user.then(res => setCurrentUser(res))
        }
    }, [isLoggedIn]);
    
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
                <Routes currentUser={currentUser} login={login} />
            </BrowserRouter>
        </div>
    );
}

export default App;