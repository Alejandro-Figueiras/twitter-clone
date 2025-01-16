import { XIcon } from 'lucide-react'
import { Button } from '../ui/button'

type PostImageItemProps = {
  image: string
  index: number
  removeImage?: (index: number) => void
}

const PostImageItem: React.FC<PostImageItemProps> = ({
  image,
  index,
  removeImage
}) => {
  return (
    <div className='relative w-full'>
      <img src={image} alt='post' className='rounded-md' />
      {removeImage && (
        <Button
          className='absolute right-0 top-0'
          variant='outline'
          size='icon'
          onClick={() => removeImage(index)}
        >
          <XIcon />
        </Button>
      )}
    </div>
  )
}

export const PostImagesContainer: React.FC<{
  images: string[]
  removeImage?: (index: number) => void
}> = ({ images, removeImage }) => {
  return (
    <div
      className={`grid w-full gap-2 pb-2 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} `}
    >
      {images.map((image, index) => (
        <PostImageItem
          key={index}
          image={image}
          index={index}
          removeImage={removeImage}
        />
      ))}
    </div>
  )
}
