import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';

function Routes() {
    return (
        <div className="Routes">
            <Route path='/'>
                <Home />
            </Route>

            {/* //! finish adding routes */}

        </div>
    );
}

export default Routes;
