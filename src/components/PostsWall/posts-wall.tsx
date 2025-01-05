'use client'
import { Account, Post } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import WallTabs, { WallTypes } from './wall-tabs'
import PostForm from './post-form'
import { loadForYou } from '@/actions/posts/load'

type PostsWallProps = {
  account: Account
}

const PostsWall = ({ account }: PostsWallProps) => {
  const [actualTab, setActualTab] = useState<WallTypes>(WallTypes.forYou)
  const [posts, setPosts] = useState<Post[]>([])

  const loadPosts = async () => {
    const posts = await loadForYou({ page: 0 })
    setPosts(posts)
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
      <pre className='p-4'>
        <code>{JSON.stringify(posts, null, 2)}</code>
      </pre>
    </div>
  )
}

export default PostsWall
