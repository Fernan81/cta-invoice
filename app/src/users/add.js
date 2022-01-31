import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function AddUser() {

    return (
        <Router>
            <div>
                <h1>Users</h1>
                
                <Link to="/Home">Home</Link>
            </div>

            

        </Router>
        
    );
}
