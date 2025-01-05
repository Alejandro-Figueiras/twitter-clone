'use server'

import { auth } from '@/auth'
import { prisma } from '@/database/client'
import { redirect } from 'next/navigation'

export type NewAccountProps = {
  username: string
  name: string
  description?: string
}

export const createNewAccount = async ({
  username,
  name,
  description
}: NewAccountProps) => {
  const authSession = await auth()
  if (!authSession || !authSession.user?.email) {
    throw new Error('Sessión no iniciada')
  }

  const emailExits = await prisma.user.findUnique({
    where: {
      email: authSession.user.email
    }
  })

  if (emailExits) {
    redirect('/')
  }

  // TODO hacer validaciones de backend con Zod
  const exists = await prisma.account.findUnique({
    where: {
      username
    }
  })

  if (exists) {
    throw new Error('Username en uso. Por favor elige otro en su lugar')
  }

  const result = await prisma.user.create({
    data: {
      email: authSession.user?.email,
      username,
      account: {
        create: {
          name,
          description: description ?? '',
          photo: '',
          banner: ''
        }
      }
    },
    include: {
      account: true
    }
  })
  return result
}
