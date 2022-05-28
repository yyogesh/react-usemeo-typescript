import { useEffect, useMemo, useState } from 'react';

export default function Fibonacci() {
    // Create state for count:
    const [count, setCount] = useState(1)

    // Create computationally expensive function:
    const fibonacci = (num: number): number => {
        return num === 2 ? 1 : num === 1 ? 0 : fibonacci(num - 1) + fibonacci(num - 2)
    }

    // Memoize fibonacci function:
    const memoizedVal = useMemo(() => fibonacci(count), [count])
    // Above, the dependency array is empty. The useMemo will run only once.

    // Check if memoizedVal changes
    useEffect(() => {
        // This log will show only once because
        // useMemo will run only once.
        console.log(memoizedVal)
    }, [memoizedVal])

    return (
        <div className="App">
            <p>{count}</p>

            <button onClick={() => setCount(prevCount => prevCount += 1)}>Increase count</button>
        </div>
    )
}