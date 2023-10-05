import axios from 'axios'
import { useEffect, useState } from 'react'
import { PostDTO } from '../types/dto'

const usePost = (id: string) => {
  const [post, setPosts] = useState<PostDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO>(`https://jsonplaceholder.typicode.com/posts/${id}`)

        setPosts(res.data)
      } catch {
        setError('Data not found')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { post, isLoading, error }
}

export default usePost
