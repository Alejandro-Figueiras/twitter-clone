'use client'
import { Account } from '@prisma/client'
import { createContext } from 'react'

type AccountContextTypes = {
  account: Account
}

export const AccountContext = createContext<AccountContextTypes>({
  account: {
    name: 'Loading',
    username: 'loading',
    createdAt: new Date(),
    banner: '',
    photo: '',
    description: ''
  }
})
