'use client'
import { Account } from '@prisma/client'
import React, { useState } from 'react'
import AccountAvatar from '../NavigationSidebar/Avatar/account-avatar'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { newPost } from '@/actions/posts/post'
import { useToast } from '@/hooks/use-toast'

type PostFormProps = {
  account: Account
  reloadPosts?: () => Promise<void>
}

const PostForm = ({ account, reloadPosts }: PostFormProps) => {
  const [text, setText] = useState<string>('')
  const { toast } = useToast()

  const submitPost = async () => {
    if (text.length) {
      newPost({ text })
        .then(() => {
          setText('')
          if (reloadPosts) reloadPosts()
        })
        .catch((e: Error) => {
          toast({
            title: 'Error al postear el tweet',
            description: e.message
          })
        })
    }
  }

  return (
    <div className='flex w-full gap-4 border-b border-muted px-4 pb-2 pt-4'>
      <AccountAvatar account={account} />
      <div className='flex w-full flex-col'>
        <Textarea
          className={`custom-scrollbar h-auto max-h-96 w-full resize-none border-none px-0 text-lg focus-visible:outline-none focus-visible:ring-0 active:outline-none`}
          onInput={(e) => {
            e.currentTarget.style.height = 'auto'
            e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px'
            setText(e.currentTarget.value)
          }}
          value={text}
          placeholder='¡¿Qué está pasando?!'
        />
        <div className='flex justify-between'>
          <div></div>
          <Button
            className='rounded-full'
            disabled={text.length <= 0}
            onClick={submitPost}
          >
            Postear
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PostForm
