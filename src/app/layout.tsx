import type { Metadata } from 'next'

import './globals.css'
import TanstackProvider from '@/components/providers/TanstackProvider'
import RecoilRootProvider from '@/components/providers/RecoilRootProvider'
import MSWComponent from '@/components/msw/MSWComponent'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../../public/static/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (

    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={` ${pretendard.className} flex justify-center`}>
        <MSWComponent />
        <TanstackProvider>
          <RecoilRootProvider>{children}</RecoilRootProvider>
        </TanstackProvider>
      </body>
    </html>
  )
}
