import PostForm from '@/components/PostsWall/post-form'
import { getAccountServer } from '@/database/get-account-server'

const HomePage = async () => {
  const account = await getAccountServer()
  return (
    <div className='min-h-screen w-full'>
      <PostForm account={account} />
      <h1 className='p-8 text-center text-lg font-semibold'>Hola Buenas!!</h1>
    </div>
  )
}

export default HomePage
