import Navbar from "@/components/Navbar"
import "./global.css"
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '700'], // You can choose other weights if needed
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={rubik.className}>
        <Navbar />
        {children}
    </body>
    </html>
  )
}