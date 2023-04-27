import React, {  useEffect, useState } from 'react';
import M from 'materialize-css';

const Myfforders  = ()=>{
    const [orders,setOrders] = useState([]) 
    useEffect(()=>{
        fetch('https://flyingliqback.onrender.com/myfforder',{
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
    const full = (orderid)=>{
        fetch('https://flyingliqback.onrender.com/deleteorder',{
            method:"post",
            headers:{
                "orderid":orderid,
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        })
        .then(data=>{
            M.toast({html:"order deleted"})
        })
    }
    return(
        <div>
            {
                orders.map(order=>(
                    <div className='flex-container'>
                        <div className='card'>
                            <img className='imgZ' alt="Bottle here" key={order._id} src={order.url}/>
                            <h1 className='row' key={order._id}>{order.name}</h1>
                            <p className='row' key={order._id}>quantity:{order.quantity}</p>
                            <p className='row' key={order._id}>price:{order.price}</p>
                        <button type="button" class="btn" onClick={()=>{full(order._id)}}>Delete this order</button> 
                        </div>
                    </div>
                ))
            }
        </div>

        // <div>
        //     Hello
        // </div>
    
    )
}

export default Myfforders;