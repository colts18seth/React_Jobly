import React from 'react';
import './Apply.css';

function Apply({handleApply, jobId}) {
    return(
        <div className="Apply">
            <button onClick={() => handleApply(jobId)}>
                Apply
            </button>
        </div>
    );
}

export default Apply;