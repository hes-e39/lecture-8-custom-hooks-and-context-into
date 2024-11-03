import { useEffect } from 'react';

export const useEventListener = (event: keyof WindowEventMap, handler: (event: WindowEventMap[keyof WindowEventMap]) => void) => {
    useEffect(() => {
        window.addEventListener(event, handler);
        return () => window.removeEventListener(event, handler);
    }, [event, handler]);
};
