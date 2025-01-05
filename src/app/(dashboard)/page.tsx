import PostsWall from '@/components/PostsWall/posts-wall'
import { getAccountServer } from '@/database/get-account-server'

const HomePage = async () => {
  const account = await getAccountServer()
  return (
    <div className='min-h-screen w-full'>
      <PostsWall account={account} />
    </div>
  )
}

export default HomePage
