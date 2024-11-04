import { useEffect, useState } from 'react';

// Example showing what happens when you forget to add a dependecy to useEffect
const EffectMissingDeps = () => {
    const [count, setCount] = useState(0);

    // biome-ignore lint/correctness/useExhaustiveDependencies: demoing what happens to count
    useEffect(function () {
        setInterval(() => {
            console.log(`Count is: ${count}`);
        }, 1000);
    }, []);

    return (
        <div className="flex gap-4 items-center">
            Count: {count}
            <button className="bg-gray-500 p-2 rounded-md" onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
};

export default EffectMissingDeps;
