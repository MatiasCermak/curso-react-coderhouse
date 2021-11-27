import { useState } from "react";

const useCounter = (def) => {
    const [count, setCount] = useState(def);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(def);

    return [count, increment, decrement, reset, setCount];
};

export default useCounter;
