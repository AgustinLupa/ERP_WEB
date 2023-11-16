import { FormEvent, useState } from "react";
import './LoginComponent.css'
import { APIService } from "../services/API";

export const LoginComponent = () =>{
    
    const [account, setaccount] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
       
        e.preventDefault();
        try{ 

            console.log(await APIService.login(account, password))
        
        } catch (er){
            console.error("Error trying to log up:", er)
            //add a useEffect component for the unmatch account or password
        }
    };
    return (
        <form onSubmit={loginHandler}>
            <h2>Log In</h2>
            <label htmlFor="account">Tipe your name accouunt</label>
            <input  type="text" id="account" value={account} onChange={(e) => setaccount(e.target.value)}>
            </input>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password}  onChange={(e) => setPassword(e.target.value)}>
            </input>

            <button type="submit" className="loginButton" > Start session</button>
            <div>
                <p>Forgotten
                    <a href="url">Password</a>
                </p>
                <p>Don´t have an account? 
                    <a href="url">Sign up</a>
                </p>
            </div>
        </form>
    );
};