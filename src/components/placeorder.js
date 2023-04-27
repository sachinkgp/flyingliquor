import React,{useState} from 'react';
import M from 'materialize-css';

const Placeorders  = ()=>{
    let [count,setCounter] = useState(0);
    let [countG,setCounterG] = useState(0);
    const decrement = ()=>{
        setCounter(count = count-1);
    }
    const increment = ()=>{
        setCounter(count = count+1);
    }
    const decrementG = ()=>{
        setCounterG(countG = countG-1);
    }
    const incrementG = ()=>{
        setCounterG(countG = countG+1);
    }
    const Bord = (count)=>{
        const price = 2000*count;
        const userid = localStorage.getItem("user")._id;
        fetch('https://flyingliqback.onrender.com/placeorder',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            },
            body:JSON.stringify({
                brand:"ballentine",
                url:"./ballentine.jpeg",
                quantity:count,
                price:price,
                fulfilled:false
            })
        })
        .then((data)=>{
            M.toast({html: 'Order Placed for Ballentine'})
        })
    }
    const Gord = (countG)=>{
        fetch('https://flyingliqback.onrender.com/placeorder',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            },
            body:JSON.stringify({
                brand:"glenfiddich",
                url:"./glenfiddich.jpeg",
                quantity:countG,
                price:3000*countG,
                fulfilled:false
            })
        })
        .then(()=>{
            M.toast({html: 'Order Placed for Glenfiddich'})
        })
    }
    return (
        <div>
            <div className='card'> 
                <img src="./ballentine.jpeg"></img>
                <div className=''>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary" onClick={()=>decrement()}>-</button>
                        <button type="button" class="btn btn-secondary" onClick={()=>{Bord(count)}}>Place {count} order</button>
                        <button type="button" class="btn btn-secondary" onClick={()=>increment()}>+</button>
                    </div>
                </div>        
            </div>
            <div className='card'> 
                <img src="./glenfiddich.jpeg"></img>
                <div className=''>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary" onClick={()=>decrementG()}>-</button>
                        <button type="button" class="btn btn-secondary" onClick={()=>{Gord(countG)}}>Place {countG} order</button>
                        <button type="button" class="btn btn-secondary" onClick={()=>incrementG()}>+</button>
                    </div>
                </div>        
            </div>
        </div>
    )
}
export default Placeorders;