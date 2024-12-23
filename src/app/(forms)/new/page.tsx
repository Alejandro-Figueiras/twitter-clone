import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

const NewAccountPage = async () => {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  return <div>NewAccountPage</div>
}

export default NewAccountPage
