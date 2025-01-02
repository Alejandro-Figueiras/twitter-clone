import { ReactElement } from 'react'

const NavigationButton = ({ children }: { children?: ReactElement }) => {
  return (
    <button className='rounded-2xl p-2 transition hover:bg-white/5 active:bg-white/10'>
      {children}
    </button>
  )
}

export default NavigationButton
