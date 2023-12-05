import { FormEvent, useState } from "react";
import './LoginComponent.css'
import { instance } from "../../services/API";



export const LoginComponent = () =>{
    
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");

    const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();

        try{ 
            const response = await instance.post("users/login", JSON.stringify({username: account, password: password}), 
            { 
                method: "post",
                headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
                }
            })
            setSuccess(response.data);
        } catch (err){
            console.error("Error trying to log up:", err);
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
            //add a useEffect component for the unmatch account or password 
        }
        
        
       
        console.log(success)
    };
    return (
        <form onSubmit={loginHandler}>
            <h2>Log In</h2>
            <label htmlFor="account">Tipe your name accouunt</label>
            <input  type="text" id="account" autoComplete="off" onChange={(e) => setAccount(e.target.value)}>
            </input>

            <label htmlFor="password">Password</label>
            <input type="password" id="password"  onChange={(e) => setPassword(e.target.value)}>
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