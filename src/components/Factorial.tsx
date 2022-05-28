import { useMemo, useState } from 'react';
export function Factorial() {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    // const factorial = factorialOf(number);
    const factorial = useMemo(() => factorialOf(number), [number]);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(Number(event.target.value));
    };
    const onClick = () => setInc(i => i + 1);

    return (
        <div>
            Factorial of
            <input type="number" value={number} onChange={onChange} />
            is {factorial}
            <button onClick={onClick}>Re-render</button>
        </div>
    );
}
//Every time you change the input value, the factorial is calculated factorialOf(n) and 'factorialOf(n) called!' is logged to console.
function factorialOf(n: number): number {
    console.log('factorialOf(n) called!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}
