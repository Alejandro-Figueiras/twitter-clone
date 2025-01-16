'use server'
import { prisma } from '@/database/client'
import { getAccountServer } from '@/database/get-account-server'
import supabase from '@/database/supabase'
import { v4 as generarUUID } from 'uuid'

export const newPost = async ({
  text,
  images
}: {
  text: string
  images: File[]
}) => {
  const account = await getAccountServer()
  if (!text || text.length <= 0) {
    throw new Error('Debe existir el texto')
  }
  const imagesInfo: {
    id: string
    fileId: string
    url: string
  }[] = []
  if (images.length > 0) {
    for (const image of images) {
      if (!image.type.startsWith('image/')) {
        throw new Error('Invalid file type. Only images are allowed.')
      }
      if (image.size > 5 * 1024 * 1024) {
        // 5MB limit
        throw new Error('Image size exceeds the 5MB limit.')
      }
    }

    // Upload images to a Supabase
    for (const image of images) {
      const name = `post-${generarUUID()}`
      const { data, error } = await supabase.storage
        .from('twitter-clone-bucket')
        .upload(name, image)
      if (error) {
        throw new Error('Error uploading image: ' + error.message)
      }
      if (data) {
        const url = `${process.env.SUPABASE_URL}/storage/v1/object/public/twitter-clone-bucket/${data.path}`
        imagesInfo.push({
          id: name,
          fileId: data.id,
          url
        })
      }
    }
  }
  const uuid = generarUUID()
  const post = await prisma.post.create({
    data: {
      id: uuid,
      text,
      author: account.username,
      images:
        images.length > 0
          ? {
              create: imagesInfo.map((image) => ({
                id: image.id,
                fileId: image.fileId,
                url: image.url
              }))
            }
          : undefined
    }
  })
  return post
}
