import * as React from "react"
import { Home, FileText, Code2, Mail } from "lucide-react"
import { AnimeNavBar } from "./anime-navbar"

const items = [
  {
    name: "Home",
    url: "#home",
    icon: Home,
  },
  {
    name: "About",
    url: "#about",
    icon: FileText,
  },
  {
    name: "Projects",
    url: "#projects",
    icon: Code2,
  },
  {
    name: "Contact",
    url: "#contact",
    icon: Mail,
  },
]

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}