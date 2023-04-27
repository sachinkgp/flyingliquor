import React, {useState,useEffect} from 'react';
// import axios from 'axios'
import M from 'materialize-css';
import {useNavigate} from 'react-router-dom'

const Allorders  = ()=>{
    const navigate = useNavigate();
    const full = (orderid)=>{
        fetch('https://flyingliqback.onrender.com/fforder',{
            method:"post",
            headers:{
                "orderid":orderid,
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        })
        M.toast({html:"Order moved to your fullfilments"})
        navigate('/myfforder')
    }
    const [orders,setOrders] = useState([]) 
    useEffect(()=>{
        fetch('https://flyingliqback.onrender.com/allorders',{
            method:"get",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        })
        .then((data1)=>data1.json())
        .then(res=>{
            setOrders(res);
        })
    },[])

    return(
        <div>  
            {
            orders.map((order)=>(
                <div className='flex-container'>
                    <div className='card'>
                        <img className='imgZ' alt="Bottle here" key={order._id} src={order.url}/>
                        <h1 className='row' key={order._id}>{order.name}</h1>
            <p className='row' key={order._id}>quantity:{order.quantity}</p>
            <p className='row' key={order._id}>price:{order.price}</p>
                        <button type="button" class="btn" onClick={()=>{full(order._id)}}>Fulfill this order</button> 
                    </div>
                </div>
            ))
            }
        </div>
    )
}
export default Allorders;


