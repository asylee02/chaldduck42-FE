'use client'
import React from 'react'
import Lottie from 'react-lottie-player'
import animationData from '../../public/lottie/loading.json'

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 60, height: 60 }}
      />
    </div>
  )
}

export default loading
