'use server'

import { signIn, signOut } from '@/auth'

export const trySignInGithub = async () => {
  await signIn('github')
}

export const trySignInGoogle = async () => {
  // await signIn("google")
  // TODO later
}

export const trySignOut = async () => {
  await signOut()
}
