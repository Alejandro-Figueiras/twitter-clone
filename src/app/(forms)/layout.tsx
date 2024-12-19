import { ReactNode } from "react"

const AuthFormsLayout = ({children}: {children: ReactNode[]}) => {
  return (<div className="w-full h-svh grid grid-cols-2 grid-rows-1">
    <div className="banner-img"></div>
    <div className="">{children}</div>
  </div>)
}

export default AuthFormsLayout