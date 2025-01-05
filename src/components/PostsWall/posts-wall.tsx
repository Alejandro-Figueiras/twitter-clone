'use client'
import { Account } from '@prisma/client'
import React, { useState } from 'react'
import WallTabs, { WallTypes } from './wall-tabs'
import PostForm from './post-form'

type PostsWallProps = {
  account: Account
}

const PostsWall = ({ account }: PostsWallProps) => {
  const [actualTab, setActualTab] = useState<WallTypes>(WallTypes.forYou)

  return (
    <div>
      <WallTabs wallType={actualTab} setActualTab={setActualTab} />
      <PostForm account={account} />
      <h1 className='p-8 text-center text-lg font-semibold'>Hola Buenas!!</h1>
    </div>
  )
}

export default PostsWall
