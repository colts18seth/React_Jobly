import React from 'react';

function Profile({currentUser}) {
    const user = currentUser;
    return (
        <div className="Profile">
            {user && 
                <h1>{user.first_name} {user.last_name}</h1>
            }
        </div>
    );
}

export default Profile;