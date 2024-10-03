'use client'

import FirstRending from './FirstRendering'
import SecondRending from './SecondRendering'
import ThirdRendering from './ThirdRendering'
import FifthRendering from './FifthRendering'

const Rendering = () => {
  return (
    <div className="flex flex-col h-full ">
      <FirstRending />
      <SecondRending />
      <ThirdRendering />
      <FifthRendering />
    </div>
  )
}

export default Rendering
