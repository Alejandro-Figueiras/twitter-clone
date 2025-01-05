'use client'
import { Account, Post } from '@prisma/client'
import React from 'react'
import AccountAvatar from '../NavigationSidebar/Avatar/account-avatar'

type PostCardProps = {
  post: Post & { authorAccount: Account }
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    // reducir pb-4 a pb-2 cuando se agregen los botones
    <div className='flex w-full gap-4 border-b border-muted px-4 pb-4 pt-4'>
      <AccountAvatar account={post.authorAccount} />
      <div className='flex w-full flex-col text-sm'>
        <p>
          <span className='font-semibold'>{post.authorAccount.name}</span>{' '}
          <span className='text-muted-foreground'>
            @{post.author} • {post.createAt.toLocaleString()}
          </span>
        </p>
        <p className='text-wrap'>{post.text}</p>
        <div className='flex justify-between'></div>
      </div>
    </div>
  )
}

export default PostCard
