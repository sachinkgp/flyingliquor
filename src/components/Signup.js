import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css'


const Signup  = ()=>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [mobileNo,setMobileNo] = useState("");

    const LoggedIn=()=>{
        fetch('https://flyingliqback.onrender.com/signup',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                password,
                mobileNo,
                email,
                name
            })
        })
        navigate('/allorders')
    }
    const gotosignin = ()=>{
        navigate('/signin');
    }
    return (
        <div className="card"> 
            <input type="text" placeholder="Name" 
            value={name} className="rows"
            onChange={(e)=>setName(e.target.value)}
            />
            <input type="text" placeholder="Email ID" 
            value={email} className="rows"
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="text" placeholder="Mobile Number" 
            value={mobileNo} className="rows"
            onChange={(e)=>setMobileNo(e.target.value)}
            />
            <input type="password" placeholder="password" 
            value={password} className="rows"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <div>
                <button type="button" class="btn" onClick={()=>LoggedIn()}>SIGN UP</button>
                <button type="button" class="btn" onClick={()=>gotosignin()}> goto SIGNIN</button>
            </div>
            
               
        </div>
    )
}

export default Signup;
