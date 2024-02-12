import { useState } from "react";

const Counter =()=>{
    const [count,setCount]=useState(0);

const increment = ()=> {
    setCount(count+1);
};
const decrement = ()=> {
    setCount(count+1);
};
const reset = ()=> {
    setCount(0);
};
const double = ()=> {
    setCount(count*2);
};
return (
    <div>
        <p>Count:{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>0</button>
        <button onClick={double}>*2</button>

    </div>
);
};
export default Counter;