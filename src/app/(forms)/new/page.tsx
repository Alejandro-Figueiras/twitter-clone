import { auth } from '@/auth'
import NewAccountForm from '@/components/Login/new-account-form'
import { redirect } from 'next/navigation'
import React from 'react'

const NewAccountPage = async () => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  return (
    <div className='m-auto min-h-screen max-w-[600px] border-x'>
      <NewAccountForm />
    </div>
  )
}

export default NewAccountPage
