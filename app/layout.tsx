import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from "react";
import ReduxProvider from "@/shared/components/redux-provider";
import BootstrapJS from "@/shared/components/bootstrap";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test drafter',
  description: 'test for drafter project',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    <body id='root' className={inter.className}>
    <ReduxProvider>
      <BootstrapJS/>
      <main className='container'>
        {children}
      </main>
      {/*<BootstrapTooltip/>*/}
    </ReduxProvider>
    </body>
    </html>
  )
}
