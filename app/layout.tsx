import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from "react";
import ReduxProvider from "@/shared/components/redux-provider";

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
    <body className={inter.className}>
    <ReduxProvider>
      <main>
        {children}
      </main>
    </ReduxProvider>
    </body>
    </html>
  )
}
