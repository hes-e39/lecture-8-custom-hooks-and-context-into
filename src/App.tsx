import Blog from './blog-example';
import StopWatchWithCustomHook from './components/StopWatchWithCustomHook';
import ThemeContextExample from './components/ThemeContextExample';
import VideoPlayer from './components/VideoPlayer';

function App() {
    return (
        <div className="flex flex-col justify-start gap-8 pt-32 px-12">
            <VideoPlayer />
            <StopWatchWithCustomHook />
            <ThemeContextExample />
            <Blog />
        </div>
    );
}

export default App;
