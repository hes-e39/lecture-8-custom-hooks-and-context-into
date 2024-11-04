import { useEffect, useRef, useState } from 'react';

type StartFunction = () => void;
type StopFunction = () => void;
type SecondsPassed = number;

function useTimer(): { start: StartFunction; stop: StopFunction; secondsPassed: SecondsPassed } {
    const [startTime, setStartTime] = useState<number | null>(null);
    const [now, setNow] = useState<number | null>(null);
    const intervalRef = useRef<number | null>(null);

    function start() {
        setStartTime(Date.now());
        setNow(Date.now());

        intervalRef.current && clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function stop() {
        intervalRef.current && clearInterval(intervalRef.current);
    }

    // cleanup function if useTimer is unmounted
    useEffect(() => {
        return () => {
            intervalRef.current && clearInterval(intervalRef.current);
        };
    }, []);

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return { start, stop, secondsPassed };
}

export default function Stopwatch() {
    const { start, stop, secondsPassed } = useTimer();

    return (
        <div>
            <div className="text-2xl">Time passed (custom hook): {secondsPassed.toFixed(3)}</div>
            <div className="flex gap-2">
                <button className="bg-gray-500 p-2 rounded-md" onClick={start}>
                    Start
                </button>
                <button className="bg-gray-500 p-2 rounded-md" onClick={stop}>
                    Stop
                </button>
            </div>
        </div>
    );
}
