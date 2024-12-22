import { auth } from '@/auth'
import NavigationSidebar from '@/components/NavigationSidebar/navigation-sidebar'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

const MainDashboardLayout = async ({ children }: { children: ReactNode[] }) => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  return (
    <div className='flex'>
      <div className='flex w-full justify-end border-r border-r-muted-foreground'>
        <div className='fixed h-svh'>
          <NavigationSidebar />
        </div>
      </div>
      <div className='min-w-[600px]'>{children}</div>
      <div className='w-full border-l border-l-muted-foreground'>
        <div className='fixed h-svh p-4'>Hola</div>
      </div>
    </div>
  )
}

export default MainDashboardLayout
