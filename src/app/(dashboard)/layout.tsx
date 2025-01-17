import NavigationSidebar from '@/components/NavigationSidebar/navigation-sidebar'
import { getAccountServer } from '@/database/get-account-server'
import { ReactNode } from 'react'

const MainDashboardLayout = async ({ children }: { children: ReactNode[] }) => {
  const account = await getAccountServer()

  return (
    <div className='flex'>
      <div className='flex w-full justify-end border-r border-r-muted'>
        <div className='fixed h-svh'>
          <NavigationSidebar account={account} />
        </div>
      </div>
      <div className='min-w-[600px] max-w-[600px]'>{children}</div>
      <div className='w-full border-l border-l-muted'>
        <div className='fixed h-svh p-4'>{/* Second Sidebar */}</div>
      </div>
    </div>
  )
}

export default MainDashboardLayout
