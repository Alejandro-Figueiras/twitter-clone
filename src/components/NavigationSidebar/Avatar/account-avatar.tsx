import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { type Account } from '@prisma/client'
import React from 'react'

type AccountAvatarProps = {
  account: Account
}

const AccountAvatar = ({ account }: AccountAvatarProps) => {
  return (
    <Avatar>
      <AvatarImage src={account.photo as string} />
      <AvatarFallback className='bg-slate-800'>
        {account.name.toUpperCase().charAt(0)}
      </AvatarFallback>
    </Avatar>
  )
}

export default AccountAvatar
