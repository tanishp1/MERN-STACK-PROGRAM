import React, { useRef} from 'react'

export default function Reference(){
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleFocus = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }
    return(
        <main style={{ textAlign: "center", marginTop: "50px" }}>
            <h1> hello </h1>
            <input ref={inputRef} type="text" placeholder="Enter text here..." /><br></br>
            <button onClick={handleFocus}>Focus Input</button>
        </main>
        
    )
}
       