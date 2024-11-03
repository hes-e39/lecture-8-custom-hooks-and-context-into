import Blog from './Blog';
import BlogProvider from './BlogProvider';

const App = () => {
    return (
        <BlogProvider>
            <Blog />
        </BlogProvider>
    );
};

export default App;
