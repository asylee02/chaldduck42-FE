import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RenderingImage1 from '../../../public/images/rending/second_rendering_Image_1.png'
import RenderingImage2 from '../../../public/images/rending/second_rendering_Image_2.png'

const SecondRending = () => {
  return (
    <div className="bg-[#FDFAF5] min-h-screen min-w-screen max-[600px] flex flex-col items-center pt-[136px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          ease: 'easeInOut',
          duration: 2,
          y: { duration: 1 },
        }}
        className="w-full"
      >
        <div className="w-full flex flex-col items-center text-[18px] font-bold mb-[62px]">
          <p>사주와 MBTI 궁합은</p>
          <p>과연 비슷할까?</p>
        </div>
        <div className="w-full relative  h-screen overflow-hidden">
          {/* Image1 */}
          <motion.div
            className="absolute z-20"
            initial={{ x: -200, opacity: 0 }} // 시작 위치와 투명도
            animate={{ x: 0, opacity: 1 }} // 끝 위치와 투명도
            transition={{ duration: 1.5 }} // 애니메이션 지속 시간
          >
            <Image src={RenderingImage1} alt="렌딩 페이지 이미지" />
          </motion.div>

          {/* Image2 */}
          <motion.div
            className="absolute z-10 right-0"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image src={RenderingImage2} alt="렌딩 페이지 이미지" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default SecondRending
