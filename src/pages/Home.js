import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import './LoginPage.css'

function Home() {
    return (
        <div className="home">
            <h2>Welcome to Todo App</h2>
            <Button className="loginBtn" variant="contained" color="secondary"><Link to="/login">Login</Link> </Button> <br></br>
       <Button className="loginBtn" variant="contained" color="secondary"><Link to='/signup'>Sign in</Link></Button>

        </div>
    )
}

export default Home
