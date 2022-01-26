import './post.css'
export default function Post ({id, title, body}) {
    return (
        <div className='divPosts' key={id}>
        <h3>{id}. {title}</h3>
        <p>{body}</p>
        </div>
    )
}