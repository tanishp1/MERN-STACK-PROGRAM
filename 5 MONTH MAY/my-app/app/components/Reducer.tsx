"use client"
import React, { useReducer } from 'react';

 function Reducer(state: number, action: { type: string}){
    switch(action.type){
        case "increment":
        return state + 1;

        case "decrement":
        return state - 1;

        case 'reset':
        return 0;

        default:
            return state;
    }
}

export default function Home(){
    const [state, dispatch] = useReducer(Reducer,0);
    return(
        <main style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Counter: {state} </h1>
            <button onClick={()=> dispatch({type: 'increment'})}> Increment </button><br></br>
            <button onClick={()=> dispatch({type: 'decrement'})}> Decrement </button><br></br>
            <button onClick={()=> dispatch({type: 'reset'})}> Reset </button>
        </main>
    )
}
