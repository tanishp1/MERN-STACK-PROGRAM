"use client"
import React, { useEffect, useState } from 'react'

export default function Timer(){
    const [seconds, setSeconds] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setSeconds((prev)=> prev + 1);
        },1000);
        
        return () => clearInterval(interval);
    }, [])
    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button onClick={()=>setSeconds(seconds+1)}>seconds increments{seconds}</button>
            <p>Seconds: {seconds}</p>
        </div>
    )
}