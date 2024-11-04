import Blog from './blog-example';
// import MouseTracker from './examples/MouseTracker';
import PersistedState from './examples/PersistedState';
import StopWatchWithCustomHook from './examples/StopWatchWithCustomHook';
import ThemeContextExample from './examples/ThemeContextExample';
import VideoPlayer from './examples/VideoPlayer';
import { usePersistedState } from './hooks/usePersistedState';

function Example({ children, number }: { children: React.ReactNode; number: number }) {
    const [isOpen, setIsOpen] = usePersistedState(`isOpen-${number}`, false);

    return (
        <div className="border-gray-500 border-[2px] p-10 rounded-md">
            <div className="flex justify-center items-center">
                <button className="bg-gray-500 p-2 rounded-md text-2xl mb-4" onClick={() => setIsOpen(!isOpen)}>
                    Example {number + 1}
                </button>
            </div>

            {isOpen && children}
        </div>
    );
}

const examples = [VideoPlayer, StopWatchWithCustomHook, PersistedState, ThemeContextExample, Blog];

function App() {
    return (
        <div className="flex flex-col justify-start gap-8 pt-32 px-12 pb-24">
            {/* <MouseTracker /> */}
            {examples.map((E, index) => (
                <Example key={index} number={index}>
                    <E />
                </Example>
            ))}
        </div>
    );
}

export default App;
