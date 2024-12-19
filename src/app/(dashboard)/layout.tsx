import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const MainDashboardLayout = async ({ children }: { children: ReactNode[] }) => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  return <div>{children}</div>
}

export default MainDashboardLayout
