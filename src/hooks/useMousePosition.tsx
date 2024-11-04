import { useState } from 'react';
import { useEventListener } from './useEventListener';

export const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEventListener('mousemove', e => {
        if (e instanceof MouseEvent) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
    });

    return position;
};
