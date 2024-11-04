import { usePersistedState } from '../hooks/usePersistedState';

const PersistedState = () => {
    const [count1, setCount1] = usePersistedState('count', 0);
    const [count2, setCount2] = usePersistedState('count', 0);

    return (
        <div className="flex gap-4 items-center">
            Count1: {count1}
            <button className="bg-gray-500 p-2 rounded-md" onClick={() => setCount1(count1 + 1)}>
                Increase Count1
            </button>
            Count2: {count2}
            <button className="bg-gray-500 p-2 rounded-md" onClick={() => setCount2(count2 + 1)}>
                Increase Count2
            </button>
        </div>
    );
};

export default PersistedState;
