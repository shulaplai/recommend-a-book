import React from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import { AiOutlineBook, AiFillAlert } from "react-icons/ai"
import { HiDesktopComputer } from "react-icons/hi"
export const SidebarData = [
  {
    title: "主頁",
    path: "https://roastedtea.click",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "翻譯",
    path: "https://roastedtea.click/category/translation",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "軟件開發",
    path: "https://roastedtea.click/category/tech",
    icon: <HiDesktopComputer />,
    cName: "nav-text",
  },
  {
    title: "棒球",
    path: "https://roastedtea.click/category/baseball",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "故事",
    path: "https://roastedtea.click/category/story",
    icon: <AiOutlineBook />,
    cName: "nav-text",
  },
  {
    title: "雜談",
    path: "https://roastedtea.click/category/new",
    icon: <AiFillAlert />,
    cName: "nav-text",
  },
]
