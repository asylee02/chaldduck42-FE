'use client'

import Link from 'next/link'
import FirstRending from './FirstRendering'
import SecondRending from './SecondRendering'
import ThirdRendering from './ThirdRendering'
import FifthRendering from './FifthRendering'

const Rendering = () => {
  return (
    <div className="flex flex-col h-full">
      <FirstRending />
      <SecondRending />
      <ThirdRendering />
      <FifthRendering />
      <Link
        href="/input"
        className="w-[335px] h-[56px] bg-Dark-Brown text-white hover:bg-brown rounded-[16px] flex items-center justify-center mb-[44px] font-pretendard fixed bottom-[32px] left-1/2 -translate-x-1/2"
      >
        내 사주 알아보기
      </Link>
    </div>
  )
}

export default Rendering
