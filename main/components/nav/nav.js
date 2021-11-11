import Link from "next/link"
import Image from "next/image"
//import linkedin_icon from "../assets/css/LinkedIn_logo_initials.png"
//import githubicon from "../assets/css/GitHub-Mark.png"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import React, { useState } from "react"

import { SidebarData } from "./SidebarData"
import { IconContext } from "react-icons"

const Nav = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-10">
      <div className="flex items-center flex-shrink-0 text-black ">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <a className="menu-bars">
              <FaBars onClick={showSidebar} />
            </a>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <a className="menu-bars">
                  <AiOutlineClose />
                </a>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link href={item.path}>
                      <a>
                        <span>{item.title}</span>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>

      <div className="w-full mx-10	block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow ">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            Read
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            Cover
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-color-red"
          >
            Submit
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Nav
