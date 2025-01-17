import { ReactElement } from 'react'

const NavigationButton = ({
  children,
  className = ''
}: {
  children: ReactElement | ReactElement[]
  className?: string
}) => {
  return (
    <button
      className={
        'rounded-2xl p-2 transition hover:bg-white/5 active:bg-white/10 ' +
        className
      }
    >
      {children}
    </button>
  )
}

export default NavigationButton
