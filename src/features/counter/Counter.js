import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    
    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={()=>dispatch(increment())}>Increase</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <button onClick={()=>dispatch(decrement())}>Decrease</button>
        </div>
    )
}

export default Counter;