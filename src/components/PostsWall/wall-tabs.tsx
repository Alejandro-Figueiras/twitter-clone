import React, { Dispatch, SetStateAction } from 'react'

export type WallTabsProps = {
  wallType: WallTypes
  setActualTab: Dispatch<SetStateAction<WallTypes>>
}

export enum WallTypes {
  forYou,
  following
}

const WallTabs = ({ wallType, setActualTab }: WallTabsProps) => {
  return (
    <div className='grid w-full grid-cols-2 border-b border-b-muted'>
      <WallTabButton
        setActualTab={setActualTab}
        wallType={WallTypes.forYou}
        active={wallType == WallTypes.forYou}
      />
      <WallTabButton
        setActualTab={setActualTab}
        wallType={WallTypes.following}
        active={wallType == WallTypes.following}
      />
    </div>
  )
}

const WallTabButton = ({
  wallType,
  active = false,
  setActualTab
}: {
  wallType: WallTypes
  active?: boolean
  setActualTab: Dispatch<SetStateAction<WallTypes>>
}) => {
  return (
    <button
      className='flex flex-col items-center rounded-none py-0 hover:bg-muted/40'
      onClick={() => setActualTab(wallType)}
    >
      <p className={`text p-2 pt-3 ${!active ? 'opacity-30' : ''}`}>
        {wallType == WallTypes.forYou
          ? 'Para ti'
          : wallType == WallTypes.following
            ? 'Siguiendo'
            : ''}
      </p>
      <div
        className={`h-1 w-16 rounded-lg bg-blue-500 ${!active ? 'opacity-0' : ''}`}
      ></div>
    </button>
  )
}

export default WallTabs
