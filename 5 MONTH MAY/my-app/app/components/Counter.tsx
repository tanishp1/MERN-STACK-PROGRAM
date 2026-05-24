"use client"
import React, { useState } from 'react'

export default function Counter(){
    const [count, setCount] = useState(0)

    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button onClick={()=>setCount(count+1)}>counter increment={count}</button>
        </div>
    )
}