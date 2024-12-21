import React from 'react'
import TwitterIcon from '../Icons/twitter-icon'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { auth } from '@/auth'

const NavigationSidebar = async () => {
  const session = await auth()

  return (
    <section className='flex h-svh flex-col justify-between p-4'>
      <main>
        <div>
          <TwitterIcon width={40} height={40} />
        </div>
      </main>
      <footer>
        <div className='flex gap-2'>
          <Avatar>
            <AvatarImage src={session?.user?.image as string} />
            <AvatarFallback className='bg-slate-800'>
              {session?.user?.name?.toUpperCase().charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className='text-md'>{session?.user?.name}</p>
            <p className='text-xs text-muted-foreground'>
              {session?.user?.email}
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default NavigationSidebar
