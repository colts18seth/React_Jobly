import React, {useState} from 'react';
import Api from './Api';
import './Profile.css';

function Profile({currentUser}) {
    const user = currentUser;
    const INITIAL_STATE = {
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        photo_url: ""
    }

    const [data, setData] = useState(INITIAL_STATE);
    const [error, setError] = useState();
    const [toggleForm, setToggleForm] = useState(false);

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
            await Api.updateUser(currentUser.username, post.data);
            setError(false);
            setData(INITIAL_STATE);
            setToggleForm(!toggleForm);
        }
        catch {
            setError(true);
        }
    }

    return (
        <div className="Profile">
            {user && 
                toggleForm 
                ?
                    <form>
                        <h2>Update {user.username}'s Info</h2>
                        {error &&
                            <p className="error">Invalid Credentials!</p>
                        }                      
                        <div>
                            <label htmlFor="first_name">First Name: </label>
                            <input onChange={handleChange} name="first_name" id="first_name" type="text" value={data.first_name}></input>
                        </div>            
                        <div>
                            <label htmlFor="last_name">Last Name: </label>
                            <input onChange={handleChange} name="last_name" id="last_name" type="text" value={data.last_name}></input>
                        </div>
                        <div>
                            <label htmlFor="photo_url">Photo URL: </label>
                            <input onChange={handleChange} name="photo_url" id="photo_url" type="text" value={data.photo_url}></input>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email: </label>
                            <input onChange={handleChange} name="email" id="email" type="text" value={data.email}></input>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password is required to update user: </label>
                            <input onChange={handleChange} name="password" id="password" type="password" value={data.password}></input>
                        </div>
                        <button onClick={handleSubmit}>Update</button>
                        <button onClick={() => setToggleForm(!toggleForm)}>Cancel</button>
                    </form>            
                : 
                    <div>
                        {user &&
                            <>
                                <img src={user.photo_url} alt={user.username + "'s photo"} />
                                <h1>{user.username}</h1>
                                <p><strong>First Name: </strong>{user.first_name}</p>
                                <p><strong>Last Name: </strong>{user.last_name}</p>
                                <p><strong>Email: </strong>{user.email}</p>
                                <button onClick={() => setToggleForm(!toggleForm)}>Update Info</button>
                            </>
                        }
                    </div>
            }
        </div>
    );
}

export default Profile;