import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const AuthFormsLayout = async ({ children }: { children: ReactNode[] }) => {
  const session = await auth()

  if (session) {
    redirect('/')
  }

  return (
    <div className='flex h-svh w-full md:grid md:grid-cols-2 md:grid-rows-1'>
      <div className='banner-img hidden md:block'></div>
      <div className='flex h-svh w-full flex-col items-center justify-center'>
        {children}
      </div>
    </div>
  )
}

export default AuthFormsLayout
