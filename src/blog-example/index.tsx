import Blog from './Blog';
import BlogProvider from './BlogProvider';

// Blog
// 1. Overview of functionality
// 2. BlogProvider - context structure
// 3. Blog, Posts compoents
// 4. Editor component and interaction with context CRUD operations

const App = () => {
    return (
        <BlogProvider>
            <Blog />
        </BlogProvider>
    );
};

export default App;
