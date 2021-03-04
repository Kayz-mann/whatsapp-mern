import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "./firebase" 
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch ({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div>
              <div className="login">
           <div className="login__container">
               <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1.png" alt="/app" />
               <div className="login__text">
                   <h1>Sign in to WhatsApp</h1>
               </div>

               <Button type="submit"
               onClick={signIn}>
                   Sign In With Google
               </Button>
           </div>
        </div>
        </div>
    )
}

export default Login
