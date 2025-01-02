import React from 'react'
import TwitterIcon from '../Icons/twitter-icon'
import { Account } from '@prisma/client'
import AccountMenu from './account-menu'

type NavigationSidebarProps = {
  account: Account
}

const NavigationSidebar = async ({ account }: NavigationSidebarProps) => {
  return (
    <section className='flex h-svh flex-col justify-between p-4'>
      <main>
        <div>
          <TwitterIcon width={40} height={40} />
        </div>
      </main>
      <footer>
        <AccountMenu account={account} />
      </footer>
    </section>
  )
}

export default NavigationSidebar
