import { Account } from '@prisma/client'
import React from 'react'
import AccountAvatar from '../NavigationSidebar/Avatar/account-avatar'
import { Textarea } from '../ui/textarea'

type PostFormProps = {
  account: Account
}

const PostForm = ({ account }: PostFormProps) => {
  // TODO Make this
  // https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
  return (
    <div className='flex w-full gap-4 border-b border-muted px-4 pb-2 pt-4'>
      <AccountAvatar account={account} />
      <div className='flex w-full flex-col'>
        <Textarea
          className='h-auto w-full resize-none border-none text-lg focus-visible:outline-none focus-visible:ring-0 active:outline-none'
          placeholder='¡¿Qué está pasando?!'
        />
      </div>
    </div>
  )
}

export default PostForm
