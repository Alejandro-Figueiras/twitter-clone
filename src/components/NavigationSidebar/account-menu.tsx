import React from 'react'
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
import AccountAvatar from './Avatar/account-avatar'
import ThreeDotsIcon from '../Icons/three-dots-icon'
import { Account } from '@prisma/client'
import NavigationButton from './navigation-button'

type AccountMenuProps = {
  account: Account
}

const AccountMenu = ({ account }: AccountMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NavigationButton>
          <div className='flex items-center gap-2'>
            <AccountAvatar account={account} />
            <div className='text-left'>
              <p className='text-md'>{account.name}</p>
              <p className='text-xs text-muted-foreground'>
                @{account.username}
              </p>
            </div>
            <ThreeDotsIcon />
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
  )
}

export default AccountMenu
