import Link from "next/link"
//import linkedin_icon from "../assets/css/LinkedIn_logo_initials.png"
//import githubicon from "../assets/css/GitHub-Mark.png"
import { FaBars } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
import React, { useState } from "react"
import { SidebarData } from "./SidebarData"
import { IconContext } from "react-icons"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"

const Nav = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="bg-white	text-black	">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={showSidebar}
          >
            <FaBars />
          </IconButton>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <a className="menu-bars">
                  <AiOutlineClose className="text-white" />
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
          <Link href="./">
            <Button color="inherit">Read</Button>
          </Link>
          <Link href="./novel">
            <Button color="inherit">Cover</Button>
          </Link>
          <Link href="./addnovel">
            <Button color="inherit">Submit</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Nav
