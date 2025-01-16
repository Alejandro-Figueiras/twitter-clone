'use client'
import React from 'react'
import AccountAvatar from '../NavigationSidebar/Avatar/account-avatar'
import { Button } from '../ui/button'
import { Heart, MessageCircle, Repeat2 } from 'lucide-react'
import { PostLoaded } from './posts-wall'
import { getHoraRelativa } from '@/helpers/time'
import { usePost } from '@/hooks/use-post'
import { PostImagesContainer } from './post-images'

type PostCardProps = {
  post: PostLoaded
  accountUsername: string
}

const PostCard = ({ post, accountUsername }: PostCardProps) => {
  const { liked, toggleLike, includeLike } = usePost(post, accountUsername)
  return (
    <div className='flex w-full gap-4 border-b border-muted px-4 pb-2 pt-4'>
      <AccountAvatar account={post.authorAccount} />
      <div className='flex w-full flex-col text-sm'>
        <p>
          <span className='font-semibold'>{post.authorAccount.name}</span>{' '}
          <span className='text-muted-foreground'>
            @{post.author} • {getHoraRelativa(post.createAt)}
          </span>
        </p>
        <p className='text-wrap'>{post.text}</p>
        <PostImagesContainer images={post.images.map((img) => img.url)} />
        <div className='flex justify-between pt-2'>
          <Button
            variant='ghost'
            className='aspect-square rounded-full p-2 py-2'
          >
            <MessageCircle />
          </Button>
          <Button
            variant='ghost'
            className='aspect-square rounded-full p-2 py-2'
          >
            <Repeat2 />
          </Button>
          <Button
            variant='ghost'
            className='aspect-square rounded-xl p-2 py-2'
            onClick={toggleLike}
          >
            {liked ? (
              <Heart className='fill-red-600 text-red-600' />
            ) : (
              <Heart />
            )}
            {post._count.likes + includeLike}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PostCard
