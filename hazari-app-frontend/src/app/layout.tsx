import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd'
import { THEME_CONFIG } from '../utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hazari App',
  description: 'Hazari App'
}

const RootLayout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ConfigProvider theme={THEME_CONFIG}>
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}

export default RootLayout