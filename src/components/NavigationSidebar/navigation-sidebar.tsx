import React from 'react'
import TwitterIcon from '../Icons/twitter-icon'
import { Account } from '@prisma/client'
import AccountMenu from './account-menu'
import NavigationButton from './navigation-button'
import { Home, User2Icon } from 'lucide-react'

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
        <div className='flex flex-col gap-4 py-8'>
          <NavigationButton className='flex gap-2'>
            <Home />
            <span>Inicio</span>
          </NavigationButton>
          <NavigationButton className='flex gap-2'>
            <User2Icon />
            <span>Mi Perfil</span>
          </NavigationButton>
        </div>
      </main>
      <footer>
        <AccountMenu account={account} />
      </footer>
    </section>
  )
}

export default NavigationSidebar
