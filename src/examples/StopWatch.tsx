import { useRef, useState } from 'react';

export default function Stopwatch() {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [now, setNow] = useState<number | null>(null);
    const intervalRef = useRef<number | null>(null);

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());

        intervalRef.current && clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        intervalRef.current && clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <div>
            <div className="text-2xl">Time passed: {secondsPassed.toFixed(3)}</div>
            <div className="flex gap-2">
                <button className="bg-gray-500 p-2 rounded-md" onClick={handleStart}>
                    Start
                </button>
                <button className="bg-gray-500 p-2 rounded-md" onClick={handleStop}>
                    Stop
                </button>
            </div>
        </div>
    );
}
