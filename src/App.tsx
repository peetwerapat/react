import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import NavbarLogin from './components/NavbarLogin'
import Post from './components/Post'
import { CreatePostDTO, PostDTO } from './types/dto'
import axios from 'axios'

// const initialPosts: PostDTO[] = [
//   {
//     id: 1,
//     userId: 1,
//     title: "Let's learn React!",
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
//   {
//     id: 2,
//     userId: 2,
//     title: 'How to install Node.js',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
//   {
//     id: 3,
//     userId: 3,
//     title: 'Basic HTML',
//     body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//   },
// ]

function App() {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')

        setPosts(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!posts) return

    setIsSubmitting(true)

    try {
      const res2 = await axios.post<CreatePostDTO[]>('https://jsonplaceholder.typicode.com/posts', {
        userId: Math.floor(Math.random() * 1000),
        title: newTitle,
        body: newBody,
      })

      console.log(res2.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsSubmitting(false)
    }

    // * Clear form after set posts
    setNewTitle('')
    setNewBody('')
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <NavbarLogin />
      <Greeting name="Peet" age={23} country="Thailand" isLoggedIn={true} />
      <Greeting name="Dodo" age={24} country="Thailand" isLoggedIn={false} />

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={(e) => setNewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" onChange={(e) => setNewBody(e.target.value)} required />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
      </form>
      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default App
