import { likePost, unlikePost } from '@/actions/posts/like'
import { PostLoaded } from '@/components/PostsWall/posts-wall'
import { useEffect, useMemo, useRef, useState } from 'react'

export const usePost = (post: PostLoaded, username: string) => {
  const defaultLiked = useMemo(() => {
    return !!post.likes.find((p) => p.username == username)
  }, [post, username])
  const [liked, setLiked] = useState<boolean>(defaultLiked)
  const [includeLike, setIncludeLike] = useState(0)
  const loading = useRef(false)

  useEffect(() => {
    setIncludeLike(0)
  }, [defaultLiked])

  const toggleLike = async () => {
    if (loading.current) return
    setLiked(!liked)
    loading.current = true
    try {
      if (liked) {
        setIncludeLike(defaultLiked ? -1 : 0)
        await likePost(post.id)
      } else {
        setIncludeLike(defaultLiked ? 0 : 1)
        await unlikePost(post.id)
      }
    } catch (err) {
      console.log(err)
    } finally {
      loading.current = false
    }
  }

  return { liked, toggleLike, includeLike }
}
