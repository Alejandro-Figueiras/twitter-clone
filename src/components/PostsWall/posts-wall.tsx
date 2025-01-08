'use client'
import { Account, Post } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import WallTabs, { WallTypes } from './wall-tabs'
import PostForm from './post-form'
import { loadForYou } from '@/actions/posts/load'
import PostCard from './post-card'
import { Loader2 } from 'lucide-react'

export type PostsWallProps = {
  account: Account
}

export type PostLoaded = Post & {
  authorAccount: Account
  _count: {
    likes: number
  }
}

const PostsWall = ({ account }: PostsWallProps) => {
  const [actualTab, setActualTab] = useState<WallTypes>(WallTypes.forYou)
  const [posts, setPosts] = useState<PostLoaded[]>([])
  const [loading, setLoading] = useState(true)

  const loadPosts = async () => {
    setLoading(true)
    const posts = await loadForYou({ page: 0 })
    setPosts(posts)
    setLoading(false)
  }

  const reloadPosts = async () => {
    await loadPosts()
  }

  useEffect(() => {
    loadPosts()
  }, [actualTab])

  return (
    <div>
      <WallTabs wallType={actualTab} setActualTab={setActualTab} />
      <PostForm account={account} reloadPosts={reloadPosts} />
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
      {loading && (
        <div className='flex w-full justify-center p-8'>
          <Loader2 className='animate-spin' width={40} height={40} />
        </div>
      )}
    </div>
  )
}

export default PostsWall
