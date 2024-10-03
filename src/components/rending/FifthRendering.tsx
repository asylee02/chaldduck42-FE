'use client'

import Image from 'next/image'
import { FiPaperclip } from 'react-icons/fi'
import ResultPage from '../../../public/images/rending/resultPage.png'

const FifthRendering = () => {
  return (
    <div className="bg-[#FDFAF5] min-h-screen w-screen max-w-[600px] flex flex-col  items-center animate-fade pt-[59px]">
      <div className=" flex flex-col items-center text-[18px] font-bold mb-[38px] animate-fade-up">
        <p>내 성격 테스트로</p>
        <p>친구와 나의 궁합까지 알 수 있어!</p>
      </div>
      <Image
        src={ResultPage}
        alt="결과 사진"
        style={{ width: 297, height: 414 }}
        className="animate-fade-up mb-[81px]"
      />
      <div className="flex justify-center items-center text-Dark-Brown font-bold">
        <FiPaperclip />
        <p className="underline ml-1">링크 복사</p>
      </div>
    </div>
  )
}

export default FifthRendering
