import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css'
import M from 'materialize-css'

const Signin  = ()=>{
    const navigate=useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const gotosignup = ()=>{
        navigate('/signup')
    }
    const LoggedIn=()=>{
        // M.toast("hi")
        fetch("https://flyingliqback.onrender.com/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                password,
                email
            })
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.error){
                // M.toast("here")
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
                // M.toast("here")
                M.toast({html: "User logged in",classes:"#c62828 red darken-3"})
                localStorage.setItem("token",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
           }})
        // navigate('/allorders');
    }
    return (
        <div className="card"> 
            <input type="text" placeholder="Email ID" 
            value={email} className="rows"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password" placeholder="Password" 
            value={password} className="rows"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <div>
                <button type="button" class="btn" onClick={()=>LoggedIn()}>Sign IN</button> 
                {/* <button type="button" class="btn" onClick={()=>gotosignup()}>goto SIGNUP</button> */}
            </div>
                       
        </div>
    )
}

export default Signin;
