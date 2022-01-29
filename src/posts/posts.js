import { useEffect, useState } from "react"
import Post from "./post";

export default function Posts () {

    const[isPosts, getPosts] = useState([{id: -1, title: 'Скачивается...', body: ''}])

    async function fetchPosts () {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        getPosts(result);

    }
    useEffect(() => {
        fetchPosts();
    },[]);

    return (
        <div>
        {isPosts.map((post) => {
            // console.log(post);
            return (
            <Post key={post.id} id={post.id} title={post.title} body={post.body} />
            )
        })}
        </div>
    )
}