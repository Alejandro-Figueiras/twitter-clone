import GithubButton from '@/components/Login/github-button'
import GoogleButton from '@/components/Login/google-button'

const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center gap-4 p-4'>
        <h1 className='text-xl font-bold'>Inicia Sesión en Twitter Clone</h1>
        <div className='flex flex-col items-center justify-center'>
          <GoogleButton />
          <GithubButton />
        </div>
        <footer>
          <p className='text-muted-foreground'>
            Creado por Alejandro Figueiras
          </p>
        </footer>
      </div>
    </div>
  )
}

export default LoginPage
