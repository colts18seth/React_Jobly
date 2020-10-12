import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Api from './Api';
import './SignIn.css';

function SignIn({setIsLoggedIn}) {
    let history = useHistory();
    const INITIAL_STATE = {
        username: "testuser",
        password: "secret"
    }

    const [data, setData] = useState(INITIAL_STATE);
    const [error, setError] = useState(false);
    const [activeForm, setActiveForm] = useState('login')

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(data => ({
            ...data,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const post = {data: data}
            const res = await Api.loginUser(post.data);
            localStorage.setItem("token", res.token);
            setIsLoggedIn(true)
            history.push("/companies");
            setError(false);
        }
        catch {
            setError(true);
        }
        setData(INITIAL_STATE);
    }

    const handleActiveForm = (e) => {
        const loginButton = document.getElementById('loginButton');
        const signUpButton = document.getElementById('signUpButton');
        const clicked = e.target;
        if(clicked.classList.contains('active')){
            return
        }else if(clicked === loginButton) {
            loginButton.classList.add('active');
            signUpButton.classList.remove('active');
            setActiveForm('login');
        }else{
            signUpButton.classList.add('active');
            loginButton.classList.remove('active');
            setActiveForm('signUp');
        }
    }

    return (
        <>
            <div className='buttons'>
                <button id='loginButton' className='loginButton active' type='button' onClick={handleActiveForm}>Login</button>
                <button id='signUpButton' className='signUpButton' type='button' onClick={handleActiveForm}>Sign-Up</button>
            </div>
            <form className="SignIn" onSubmit={handleSubmit}>
                {activeForm === 'login' ? 
                    <h2>Login</h2> :
                    <h2>Sign-Up</h2>
                }
                {error && <p className="error">Invalid Credentials!</p>}
                <div>
                    <label htmlFor="username">Username: </label>
                    <input onChange={handleChange} name="username" id="username" type="text" value={data.username}></input>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input onChange={handleChange} name="password" id="password" type="password" value={data.password}></input>
                </div>
                {activeForm === 'signUp' &&
                    <>
                        <div>
                            <label htmlFor="firstName">First Name: </label>
                            <input onChange={handleChange} name="firstName" id="firstName" type="text" value={data.firstName}></input>
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name: </label>
                            <input onChange={handleChange} name="lastName" id="lastName" type="text" value={data.lastName}></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input onChange={handleChange} name="email" id="email" type="text" value={data.email}></input>
                        </div>
                        <div>
                            <label htmlFor="photoURL">Photo URL: </label>
                            <input onChange={handleChange} name="photoURL" id="photoURL" type="text" value={data.photoURL}></input>
                        </div>
                    </>
                }
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default SignIn;