import React from 'react'
import CheckPrettyIcon from '../Icons/check-pretty-icon'
import { Button } from '../ui/button'
import Link from 'next/link'
import { House } from 'lucide-react'

const WelcomeView = ({ nombre = '' }) => {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4 p-8 text-center'>
      <CheckPrettyIcon width={60} height={60} />
      <h1 className='text-2xl font-bold'>Todo Listo!</h1>
      <p className='text-lg font-light'>
        Bienvenido, {nombre}. Ya estás preparado para utilizar este clon de
        Twitter. Clickea en el siguiente botón para ir al Inicio.
      </p>
      <Button variant='outline' asChild>
        <Link href='/'>
          <House />
          Ir a Inicio
        </Link>
      </Button>
    </div>
  )
}

export default WelcomeView
