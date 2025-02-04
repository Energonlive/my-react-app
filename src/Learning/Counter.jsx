import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div className={"counter-container"}>
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="counter-button" onClick={() => setCount(0)}>Reset</button>
            <button className="counter-button" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;