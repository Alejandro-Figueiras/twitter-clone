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
    <div className='m-auto min-h-screen max-w-[600px] border-x p-8'>
      <h1 className='mb-8 text-2xl font-bold'>Nueva Cuenta</h1>
      <NewAccountForm />
    </div>
  )
}

export default NewAccountPage
