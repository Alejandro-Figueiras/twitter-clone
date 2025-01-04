import { trySignOut } from '@/actions/auth/auth-handlers'
import { auth } from '@/auth'
import { prisma } from './client'
import { redirect } from 'next/navigation'

export const getAccountServer = async () => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }
  if (!session.user?.email) {
    trySignOut()
    redirect('/login')
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email
    },
    include: {
      account: true
    }
  })
  if (!user || !user.account) {
    redirect('/new')
  }
  return user.account
}
