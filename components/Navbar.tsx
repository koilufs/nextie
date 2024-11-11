import { title } from 'process'
import React from 'react'

const navitems = [
    { title: "Dashboard"},
    { title: "Analytics"},
    { mi: "Leaderboard"},
    { mi: "Leaderboard"},
    { mi: "Leaderboard"},
]


const Navbar = () => {
  return (
    <div className='bg-slate-900 text-white p-2 flex justify-around items-center h-[100px]'>
      <h1 className='text-4xl' >Home</h1>
      <ul className='flex flex-row'>
        {navitems.map((kal, index) => {
            return (
            <li className='mx-10' key={index}>{kal.title}{kal.mi}</li>)
        }
        )}
      </ul>
    </div>
  )
}

export default Navbar
