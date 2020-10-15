import React from 'react';
import './Profile.css';

function Profile({currentUser}) {
    const user = currentUser;

    //? add state for showing form for updating user

    return (
        <div className="Profile">
            {user && 
            <>
                <h1>{user.first_name} {user.last_name}</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Photo URL: {user.photo_url ? user.photo_url : "None"}</p>
                <button>Update Info</button>
            </>
            }

            {/* //? add form for user update */}

        </div>
    );
}

export default Profile;