import { trySignOut } from '@/actions/auth/auth-handlers'
import { auth } from '@/auth'

export default async function Home() {
  const session = await auth()
  return (
    <div className='w-full'>
      <h1 className='p-8 text-center text-lg font-semibold'>Hola Buenas!!</h1>

      <div className='flex flex-col items-center gap-4 p-4'>
        <div className='flex flex-col items-center'>
          {session?.user?.image && (
            <img src={session?.user?.image} width={100} height={100} />
          )}
          {session?.user?.id && <p>ID: {session?.user?.id}</p>}
          {session?.user?.name && <p>{session?.user?.name}</p>}
          {session?.user?.email && <p>{session?.user?.email}</p>}
          {session?.expires && <p>Expira el {session?.expires}</p>}
        </div>
        <button onClick={trySignOut} className='border-2 border-red-500'>
          Cerrar Sesión
        </button>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
        <p>Buttons</p>
      </div>
    </div>
  )
}
