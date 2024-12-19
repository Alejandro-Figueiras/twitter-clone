import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const AuthFormsLayout = async ({ children }: { children: ReactNode[] }) => {
  const session = await auth()

  if (session) {
    redirect('/')
  }

  return (
    <div className='grid h-svh w-full grid-cols-2 grid-rows-1'>
      <div className='banner-img'></div>
      <div className='flex h-svh flex-col justify-center'>{children}</div>
    </div>
  )
}

export default AuthFormsLayout
