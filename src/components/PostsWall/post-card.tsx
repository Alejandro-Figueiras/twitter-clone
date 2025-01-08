'use client'
import React from 'react'
import AccountAvatar from '../NavigationSidebar/Avatar/account-avatar'
import { Button } from '../ui/button'
import { Heart, MessageCircle, Repeat2 } from 'lucide-react'
import { PostLoaded } from './posts-wall'

type PostCardProps = {
  post: PostLoaded
}

const PostCard = ({ post }: PostCardProps) => {
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
          <Button variant='ghost' className='aspect-square rounded-xl p-2 py-2'>
            <Heart />
            {post._count.likes}
          </Button>
        </div>
      </div>
    </div>
  )
}

const getHoraRelativa = (createdAt: Date) => {
  const now = new Date()
  const diferenciaDias = Math.floor(
    (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24)
  )
  const diferenciaHoras = Math.floor(
    (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60)
  )

  if (diferenciaHoras < 24) {
    const diferenciaMinutos = Math.floor(
      (now.getTime() - createdAt.getTime()) / (1000 * 60)
    )
    if (diferenciaMinutos < 1) {
      return `${Math.floor((now.getTime() - createdAt.getTime()) / 1000)}s`
    } else if (diferenciaMinutos < 60) {
      return `${diferenciaMinutos}min`
    }
    return `${diferenciaHoras}h`
  }
  if (diferenciaDias == 1) return 'ayer'
  if (diferenciaDias < 7) {
    return `${diferenciaDias} días`
  }
  const meses = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic'
  ]
  if (diferenciaDias < 365) {
    return `${meses[createdAt.getMonth()]} ${createdAt.getDate()}`
  } else {
    return `${meses[createdAt.getMonth()]} ${createdAt.getDate()}, ${createdAt.getFullYear()}`
  }
}

export default PostCard
