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

  const account = await prisma.account.findUnique({
    where: {
      email: session.user.email
    }
  })
  if (!account) {
    redirect('/new')
  }
  return account
}
