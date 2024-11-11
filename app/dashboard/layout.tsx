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
    <main className={rubik.className}>
        {children}
    </main>
  )
}