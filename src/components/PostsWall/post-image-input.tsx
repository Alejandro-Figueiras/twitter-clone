import React, { RefObject, useRef } from 'react'
import { Button } from '../ui/button'
import { ImagePlus } from 'lucide-react'

export type PostImageInputProps = {
  images: RefObject<File[]>
  updateURLs?: () => void
}

const PostImageInput = ({ images, updateURLs }: PostImageInputProps) => {
  const imageInput = useRef<HTMLInputElement>(null)

  return (
    <>
      <input
        type='file'
        accept='image/*'
        className='hidden'
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            if (
              images.current.length < 2 &&
              images.current.findIndex((img) => img.name === file.name) === -1
            ) {
              images.current.push(file)
              if (updateURLs) updateURLs()
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
    </>
  )
}

export default PostImageInput
