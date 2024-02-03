import type { Metadata } from 'next'
import './globals.css'
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import TopNav from '@/app/components/TopNav';



export const metadata: Metadata = {
  title: 'Bapple',
  description: 'Fullstack ecommerce app using NextJS and Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <TopNav />
        {children}</body>
    </html>
  )
}


// mongodb+srv://catherineobalogun:uxA5Uhe0rOFaYrDN@cluster0.40r571x.mongodb.net/