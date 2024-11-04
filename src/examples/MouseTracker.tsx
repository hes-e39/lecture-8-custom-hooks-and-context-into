import { useEffect, useState } from 'react';

export default function MouseTracker() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMove(e: MouseEvent) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener('pointermove', handleMove);
        return () => {
            window.removeEventListener('pointermove', handleMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '25%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                width: 40,
                height: 40,
                left: -20,
                top: -20,
            }}
        />
    );
}
