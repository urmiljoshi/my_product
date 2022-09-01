import React, { useState } from 'react';

function Counter(props) {
    const [Counter , setCounter] = useState(0) 
    const  Increment =() => {
        if (Counter <5){
            setCounter(Counter+1);
        }
    }
        const Decrement = () => {
            if (Counter > 0) {
                setCounter(Counter - 1);
            }
        }
    
    return (
        <div>
            <button onClick={() => Increment ()}>+</button>
            <span>{Counter}</span>
            <button onClick={() => Decrement  ()}>-</button>
        </div>
    );
}

export default Counter;