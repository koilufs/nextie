import Link from 'next/link'
import React from 'react'
import { LayoutDashboard, ChartColumn, Trophy } from 'lucide-react'

const navitems = [
    { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard},
    { title: "Analytics", href: "/analytics", icon: ChartColumn},
    { title: "Leaderboard", href: "/leaderboard", icon: Trophy }
]


const Navbar = () => {
  return (
    <div className='bg-slate-900 text-white p-2 flex justify-around items-center h-[100px]'>
      <Link href="/" className='text-4xl' >Home</Link>
      <ul className='flex flex-row'>
        {navitems.map((item, index) => {
            return (
            <li className='mx-10 hover:bg-slate-700 cursor-pointer p-2 rounded' key={index}>
              <Link href={item.href} className='flex flex-row gap-2 items-center'>
              {item.icon && React.createElement(item.icon, { size: 16 })}
                {item.title}
              </Link>
            </li>)
        }
        )}
      </ul>
    </div>
  )
}

export default Navbar
