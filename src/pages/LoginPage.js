import React from 'react'
import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import './LoginPage.css'
function LoginPage() {
    return (
        <div className="loginpage">
            <h2 className="Heading">Login</h2>
            <br></br>
            <form>
             <TextField id="outlined-basic" label="Email" variant="outlined" /><br></br><br></br>
             <TextField id="outlined-basic" label="Password" variant="outlined" /><br></br>
             <p  className="forget"><Link to="/signup">forget password?</Link></p><br></br>
           <Button className="loginBtn" variant="contained" color="secondary"><Link to='/todos'>Login</Link></Button>
</form>
        </div>
    )
}

export default LoginPage
