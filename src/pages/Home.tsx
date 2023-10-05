import usePosts from '../hooks/usePosts'
import Post from '../components/Post'
import classes from './Home.module.css'
import { useAuth } from '../providers/AuthProviders'

const Home = () => {
  const { posts, isLoading } = usePosts()
  const { isLoggedIn } = useAuth()

  console.log('from home:', isLoggedIn)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={classes.container}>
      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default Home
