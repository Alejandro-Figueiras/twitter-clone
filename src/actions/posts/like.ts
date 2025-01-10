'use server'

import { prisma } from '@/database/client'
import { getAccountServer } from '@/database/get-account-server'

export const likePost = async (postId: string) => {
  const account = await getAccountServer()

  const result = await prisma.like.create({
    data: {
      username: account.username,
      postId
    }
  })
  return result
}

export const unlikePost = async (postId: string) => {
  const account = await getAccountServer()

  await prisma.like.delete({
    where: {
      postId_username: {
        username: account.username,
        postId
      }
    }
  })
}
