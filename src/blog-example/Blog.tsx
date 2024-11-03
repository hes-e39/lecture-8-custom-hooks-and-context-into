import { useContext, useState } from 'react';
import { BlogContext } from './BlogProvider';

const Footer = () => {
    const { posts } = useContext(BlogContext);
    return <div className="panel">Total Posts: {posts.length}</div>;
};

const Editor = () => {
    const { selected: post, setSelected, updatePost, createPost } = useContext(BlogContext);
    const [title, setTitle] = useState(post?.title ?? '');
    const [content, setContent] = useState(post?.content ?? '');

    return (
        <div className="bg-gray-500 p-4 w-fit rounded-md flex flex-col gap-4 h-fit">
            <input placeholder="title..." className="p-2 rounded-md" type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea
                placeholder="content..."
                className="p-2 rounded-md"
                value={content}
                onChange={e => {
                    setContent(e.target.value);
                }}
            />
            <button
                className="bg-blue-500 p-2 rounded-md"
                onClick={() => {
                    if (post?.id) {
                        updatePost({
                            id: post.id,
                            title,
                            content,
                        });
                    } else {
                        createPost({
                            title,
                            content,
                        });
                    }
                }}
            >
                Save
            </button>
            <button
                className="bg-red-500 p-2 rounded-md"
                onClick={() => {
                    setSelected(null);
                }}
            >
                Cancel
            </button>
        </div>
    );
};

const Posts = () => {
    const { posts, setSelected, deletePost } = useContext(BlogContext);

    return posts.map(p => (
        <div key={p.id}>
            <div className="bg-gray-800 p-4">
                <div className="flex mb-2">
                    <div className="flex-1">
                        <b>{p.title}</b>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setSelected(p)} className="bg-blue-500 p-2 rounded-md">
                            Edit
                        </button>
                        <button
                            onClick={() => {
                                deletePost(p.id);
                            }}
                            className="bg-red-500 p-2 rounded-md"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
                <div dangerouslySetInnerHTML={{ __html: p.content }} />
            </div>
        </div>
    ));
};

const Blog = () => {
    const { selected, setSelected } = useContext(BlogContext);

    return (
        <div className="flex gap-4">
            <div className="bg-gray-300 p-4 rounded-md w-[400px] flex flex-col gap-4 h-fit">
                <div className="flex items-center justify-between gap-4">
                    <div className="text-2xl">Posts</div>
                    <button className="bg-green-500 p-2 rounded-md" onClick={() => setSelected({})}>
                        +
                    </button>
                </div>
                <Posts />
                <Footer />
            </div>

            {selected && <Editor />}
        </div>
    );
};

export default Blog;
