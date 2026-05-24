import React, { useState, useCallback } from 'react';

function Button({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
    console.log(`Rendering button: ${children}`);
    return <button onClick={onClick}>{children}</button>;
}

export default function Callback(){
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(prevCount => prevCount - 1);
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <p>Count: {count}</p>
            <Button onClick={increment}>Increment</Button><br></br>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}