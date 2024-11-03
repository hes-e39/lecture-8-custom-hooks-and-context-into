import { useRef } from 'react';

type CleanupCallback = () => void;
type EffectCallback = () => CleanupCallback | undefined;
type DependencyList = readonly unknown[];

const checkDepsChanged = (prevDeps: DependencyList, deps: DependencyList) => {
    if (prevDeps.length !== deps.length) {
        console.warn('length of deps must be the same');
    }

    return deps.some((dep, index) => !Object.is(dep, prevDeps[index]));
};

export function useCustomEffect(effect: EffectCallback, deps?: DependencyList): void {
    const isFirstRender = useRef(true);
    const prevDeps = useRef(deps);
    const cleanup = useRef<CleanupCallback | null>(null);

    if (isFirstRender.current) {
        isFirstRender.current = false;
        cleanup.current = effect() || null;
        return;
    }

    if (!deps) {
        cleanup.current?.();
        cleanup.current = effect() || null;
        return;
    }

    const hasChanged = checkDepsChanged(prevDeps.current!, deps);
    if (hasChanged) {
        cleanup.current?.();
        cleanup.current = effect() || null;
    }

    prevDeps.current = deps;
}
