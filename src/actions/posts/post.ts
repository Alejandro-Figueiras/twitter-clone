'use server'
import { prisma } from '@/database/client'
import { getAccountServer } from '@/database/get-account-server'
import { v4 as generarUUID } from 'uuid'

export const newPost = async ({ text }: { text: string }) => {
  const account = await getAccountServer()
  if (!text || text.length <= 0) {
    throw new Error('Debe existir el texto')
  }
  const uuid = generarUUID()
  const post = await prisma.post.create({
    data: {
      id: uuid,
      text,
      author: account.username
    }
  })
  return post
}
