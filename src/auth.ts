import NextAuth, { NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export const config: NextAuthConfig = {
  providers: [GitHub, Google],
  pages: {
    signIn: '/login'
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
