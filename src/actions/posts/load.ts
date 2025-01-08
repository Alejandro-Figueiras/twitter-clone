'use server'
import { prisma } from '@/database/client'
const LIMIT = 20

export const loadForYou = async ({ page = 0 }) => {
  const posts = await prisma.post.findMany({
    skip: page * LIMIT,
    take: LIMIT,
    include: {
      _count: {
        select: { likes: true }
      },
      authorAccount: true
    },
    orderBy: {
      createAt: 'desc'
    }
  })
  return posts
}
