import React, { ReactElement } from 'react'
import TwitterIcon from '../Icons/twitter-icon'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem
} from '../ui/dropdown-menu'
import { trySignOut } from '@/actions/auth/auth-handlers'
import { Account } from '@prisma/client'

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <NavigationButton>
              <div className='flex items-center gap-2'>
                <Avatar>
                  <AvatarImage src={account.photo as string} />
                  <AvatarFallback className='bg-slate-800'>
                    {account.name.toUpperCase().charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className='text-left'>
                  <p className='text-md'>{account.name}</p>
                  <p className='text-xs text-muted-foreground'>
                    @{account.username}
                  </p>
                </div>
                <svg
                  width='16'
                  height='16'
                  className='rotate-90'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3' />
                </svg>
              </div>
            </NavigationButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-80'>
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={trySignOut}>
                Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </footer>
    </section>
  )
}

const NavigationButton = ({ children }: { children?: ReactElement }) => {
  return (
    <button className='rounded-2xl p-2 transition hover:bg-white/5 active:bg-white/10'>
      {children}
    </button>
  )
}

export default NavigationSidebar
