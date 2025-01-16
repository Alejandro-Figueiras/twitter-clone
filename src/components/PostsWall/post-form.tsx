'use client'
import { Account } from '@prisma/client'
import React, { useState } from 'react'
import AccountAvatar from '../NavigationSidebar/Avatar/account-avatar'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { newPost } from '@/actions/posts/post'
import { useToast } from '@/hooks/use-toast'
import { ImagePlus, XIcon } from 'lucide-react'

type PostFormProps = {
  account: Account
  reloadPosts?: () => Promise<void>
}

const PostForm = ({ account, reloadPosts }: PostFormProps) => {
  const [text, setText] = useState<string>('')
  const [images, setImages] = useState<File[]>([])
  const imageInput = React.useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index)
    setImages(newImages)
  }

  const submitPost = async () => {
    if (text.length) {
      newPost({ text, images })
        .then(() => {
          setText('')
          if (reloadPosts) reloadPosts()
        })
        .catch((e: Error) => {
          toast({
            title: 'Error al postear el tweet',
            description: e.message
          })
        })
    }
  }

  return (
    <div className='flex w-full gap-4 border-b border-muted px-4 pb-2 pt-4'>
      <AccountAvatar account={account} />
      <div className='flex w-full flex-col'>
        <Textarea
          className={`custom-scrollbar h-auto max-h-96 w-full resize-none border-none px-0 text-lg focus-visible:outline-none focus-visible:ring-0 active:outline-none`}
          onInput={(e) => {
            e.currentTarget.style.height = 'auto'
            e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px'
            setText(e.currentTarget.value)
          }}
          value={text}
          placeholder='¡¿Qué está pasando?!'
        />
        {images.length > 0 && (
          <ImagesContainer images={images} removeImage={removeImage} />
        )}
        <div className='flex justify-between'>
          <div>
            <input
              type='file'
              accept='image/*'
              className='hidden'
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0]
                  if (
                    images.length < 2 &&
                    images.findIndex((img) => img.name === file.name) === -1
                  ) {
                    setImages([...images, file])
                  }
                  if (imageInput.current) {
                    imageInput.current.value = ''
                  }
                }
              }}
              ref={imageInput}
            />
            <Button
              variant='outline'
              size='icon'
              onClick={() => imageInput.current?.click()}
            >
              <ImagePlus />
            </Button>
          </div>
          <Button
            className='rounded-full'
            disabled={text.length <= 0}
            onClick={submitPost}
          >
            Postear
          </Button>
        </div>
      </div>
    </div>
  )
}

type ImageItemProps = {
  image: File
  index: number
  removeImage: (index: number) => void
}

const ImageItem: React.FC<ImageItemProps> = ({ image, index, removeImage }) => {
  return (
    <div className='relative w-full'>
      <img src={URL.createObjectURL(image)} alt='post' className='rounded-md' />
      <Button
        className='absolute right-0 top-0'
        variant='outline'
        size='icon'
        onClick={() => removeImage(index)}
      >
        <XIcon />
      </Button>
    </div>
  )
}

const ImagesContainer: React.FC<{
  images: File[]
  removeImage: (index: number) => void
}> = ({ images, removeImage }) => {
  return (
    <div
      className={`grid w-full gap-2 pb-2 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} `}
    >
      {images.map((image, index) => (
        <ImageItem
          key={index}
          image={image}
          index={index}
          removeImage={removeImage}
        />
      ))}
    </div>
  )
}

export default PostForm
