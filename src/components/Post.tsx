import { useState } from 'react'
import { PostDTO } from '../types/dto'
import classes from './Post.module.css'
import { Link } from 'react-router-dom'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const [moreInfo, setMoreInfo] = useState<boolean>(false)

  const toggleShow = () => {
    setMoreInfo(!moreInfo)
  }

  return (
    <div className={classes.post}>
      <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <p>id: {post.id}</p>
        <p>postedBy: {post.userId}</p>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
      </Link>
      {moreInfo && <p>more post information</p>}
      <button onClick={toggleShow}>{moreInfo ? 'Show Less' : 'Show More'}</button>
    </div>
  )
}
export default Post
