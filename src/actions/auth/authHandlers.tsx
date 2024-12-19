'use server'

import { signIn } from '@/auth'

export const trySignInGithub = async () => {
  await signIn('github')
}

export const trySignInGoogle = async () => {
  // await signIn("google")
  // TODO later
}
