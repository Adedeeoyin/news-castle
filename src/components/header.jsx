'use client'
import Typewriter from "typewriter-effect"
import Navbar from "./nav-bar"
import { MdCastle } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";

const Header = () => {
  const socials = [
    {name: <TiSocialFacebook/>, link:'https://twitter.com/'},
     {name:< SlSocialYoutube/>, link:'https://twitter.com/'},
      {name: <BsTwitterX/>, link:'https://twitter.com/'},
       {name: <GrInstagram/>, link:'https://twitter.com/'}
      ];
  return (
    <header className="w-full fixed z-[99999] mb-20 top-0">
        <div className="w-full bg-choice1 py-10 px-16 text-choice4 flex justify-between">
          <div className="flex flex-col items-center">
            <MdCastle/>
            News Castle
          </div>
          {
            socials.map((soc, i)=>{
              return(
                <a key={i} href={soc.link} className="text-xl hover:opacity-80 max-sm:hidden">
                  {soc.name}
                </a>
              )
            })
          }
          <Typewriter
           options={{
            strings: ['Welcome to the home of news'],
            autoStart: true,
            loop: true
          }}
          />
        </div>
        <Navbar/>
    </header>
  )
}

export default Header