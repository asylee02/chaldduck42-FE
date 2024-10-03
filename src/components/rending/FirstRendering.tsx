import React from 'react'
import Image from 'next/image'
import RendingFruit from '../../../public/images/rending/redingFruit.png'
import Ducck from '../../../public/svgs/dduck.svg'
import Menu from '../../../public/svgs/menu.svg'

const FirstRending = () => {
  return (
    <div className="bg-gradient-to-b from-[#F0D9B8] to-[#FDFAF5] min-h-screen w-screen max-w-[600px] pt-[22px] flex flex-col justify-between items-center animate-fade ">
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" flex w-full justify-between px-[15px] animate-fade">
          <Ducck />
          <Menu />
        </div>
        <div className="mt-[66px] flex flex-col items-center text-Dark-Brown font-bold animate-fade-up">
          <p className="text-[18px] font-sans">
            사주와 성격으로 보는 우리 궁합
          </p>
          <p className="text-[24px]">우리 찰떡궁합일까?</p>
        </div>
        <Image
          src={RendingFruit}
          alt="과일바구니 사진"
          className="mt-[52px] animate-fade-up"
          width={375} // 가로 크기 설정
          height={341} // 세로 크기 설정
        />
      </div>
    </div>
  )
}

export default FirstRending
