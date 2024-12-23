import React, { ReactElement } from 'react'
import TwitterIcon from '../Icons/twitter-icon'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { auth } from '@/auth'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem
} from '../ui/dropdown-menu'
import { trySignOut } from '@/actions/auth/authHandlers'
import { redirect } from 'next/navigation'
import { prisma } from '@/database/client'

const NavigationSidebar = async () => {
  const session = await auth()
  const user = await prisma.account.findUnique({
    where: {
      email: session?.user?.email as string
    }
  })
  if (!user) {
    redirect('/new')
  }

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
              <div className='flex gap-2'>
                <Avatar>
                  <AvatarImage src={session?.user?.image as string} />
                  <AvatarFallback className='bg-slate-800'>
                    {session?.user?.name?.toUpperCase().charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className='text-left'>
                  <p className='text-md'>{session?.user?.name}</p>
                  <p className='text-xs text-muted-foreground'>
                    {session?.user?.email}
                  </p>
                </div>
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
