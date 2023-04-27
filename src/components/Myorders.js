import React, {  useEffect, useState } from 'react';
// import axios from 'axios'
// import M from 'materialize-css';

const Myorder  = ()=>{
    const [orders,setOrders] = useState([]) 
    useEffect(()=>{
        fetch('https://flyingliqback.onrender.com/myorders',{
            method:"get",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        })
        .then((data1)=>data1.json())
        .then(res=>{
            setOrders(res);
            // M.toast({html:JSON.stringify(typeof(res))})
        })
    },[])

    
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
                        </div>
                    </div>
                ))
            }
        </div>
    
    )
}

export default Myorder;