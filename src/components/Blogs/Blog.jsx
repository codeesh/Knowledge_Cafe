import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
            fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h1 className="text-4xl text-red-800">Inside Blog</h1>
        </div>
    );
};

export default Blog;