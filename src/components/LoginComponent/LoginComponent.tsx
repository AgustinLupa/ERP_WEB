import { FormEvent, useState } from "react";
import './LoginComponent.css'
import {posting} from "../../services/API";



export const LoginComponent = () =>{
   
    const [formData, setFormData] = useState({username : "", password : "" })
    const [success, setSuccess] = useState("");


    const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();

        try{ 
            posting("users/login", formData)
        } catch (err){
            console.error("Error trying to log up:", err);
            //add a useEffect component for the unmatch account or password 
        }
        console.log(success)
        //mostrar el status 400 o 500 en el login en alguna parte
    };
    return (
        <form onSubmit={loginHandler}>
            <h2>Log In</h2>
            <label htmlFor="account">Tipe your name accouunt</label>
            <input  type="text" id="account" autoComplete="off" onChange={(e) =>
                 setFormData({...formData, username: e.target.value })}/>
           
            <label htmlFor="password">Password</label>

            <input type="password" id="password"  onChange={(e) =>
                 setFormData({...formData, password : e.target.value})}/>

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