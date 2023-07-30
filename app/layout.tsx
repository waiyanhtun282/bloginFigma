import { Footer, NavBar } from '@/components';
import './globals.css'
import type { Metadata } from 'next';
import Provider from './Provider';


export const metadata: Metadata = {
  title: 'Meta Blog App',
  description: 'Create by Meta blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider >
       <div className=" relative">
       <NavBar />
        {children}
        <Footer />
        
       </div>

        </Provider>
        </body>
    </html>
  )
}
