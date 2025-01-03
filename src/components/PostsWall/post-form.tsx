'use client'
import { Account } from '@prisma/client'
import React from 'react'
import AccountAvatar from '../NavigationSidebar/Avatar/account-avatar'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

type PostFormProps = {
  account: Account
}

const PostForm = ({ account }: PostFormProps) => {
  return (
    <div className='flex w-full gap-4 border-b border-muted px-4 pb-2 pt-4'>
      <AccountAvatar account={account} />
      <div className='flex w-full flex-col'>
        <Textarea
          className={`custom-scrollbar h-auto max-h-96 w-full resize-none border-none px-0 text-lg focus-visible:outline-none focus-visible:ring-0 active:outline-none`}
          onInput={(e) => {
            e.currentTarget.style.height = 'auto'
            e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px'
          }}
          placeholder='¡¿Qué está pasando?!'
        />
        <div className='flex justify-between'>
          <div></div>
          <Button className='rounded-full'>Postear</Button>
        </div>
      </div>
    </div>
  )
}

export default PostForm
