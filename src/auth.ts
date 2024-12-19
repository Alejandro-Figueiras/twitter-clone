import NextAuth, { NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'

export const config: NextAuthConfig = {
  providers: [GitHub],
  pages: {
    signIn: '/login'
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
