import { createContext, useState } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import { makeId } from './util';

export type Post = {
    id: string;
    title: string;
    content: string;
};

export type BlogContextType = {
    posts: Post[];

    selected: Post | Partial<Post> | null;
    setSelected: (post: Post | Partial<Post> | null) => void;

    createPost: (post: { title: string; content: string }) => Post;
    updatePost: (post: Post) => void;
    deletePost: (id: string) => void;
};

export const BlogContext = createContext<BlogContextType>({
    posts: [],

    selected: null,
    setSelected: () => {},

    createPost: () => ({ id: '', title: '', content: '' }),
    updatePost: () => {},
    deletePost: () => {},
});

const BlogProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = usePersistedState<Post[]>('react-blog', []);
    const [selected, setSelected] = useState<Post | Partial<Post> | null>(null);

    return (
        <BlogContext.Provider
            value={{
                posts,
                createPost: ({ title, content }) => {
                    const id = makeId();
                    const newPost = { id, title, content };
                    setPosts([...posts, newPost]);
                    setSelected(null);
                    return newPost;
                },
                updatePost: post => {
                    const updatedPosts = posts.map(p => (p.id === post.id ? post : p));
                    setSelected(null);
                    setPosts(updatedPosts);
                },
                deletePost: id => setPosts(posts.filter(p => p.id !== id)),
                selected,
                setSelected,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogProvider;
