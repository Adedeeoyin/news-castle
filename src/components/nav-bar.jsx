'use client'
import { Gupter } from 'next/font/google'

import Link from "next/link"
import { usePathname } from "next/navigation"

const font = Gupter({ subsets: ["latin"], weight: ['400','500','700']});

const Navbar = () => {
    const navbar = [
        {name:'Home', path:'/'},
        {name:'Explore', path:'/explore'},
        {name:'Partnership', path:'/partner'},
        {name:'About', path:'/about'},
        {name:'Contact us', path:'/contact'},
    ]

    const pathname = usePathname()

  return (
    <div className="flex items-center justify-around w-full py-2 font-semibold text-2xl max-sm:text-sm text-choice1 bg-white z-[99]">
        {
            navbar.map((bar, i)=>{
                return <Link href={bar.path} key={bar.name} className={`${pathname === bar.path?'border-b-4 border-choice2': null} ${font.className}`}>{bar.name}</Link>
            })
        }
    </div>
  )
}

export default Navbar