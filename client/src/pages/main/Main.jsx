import "./main.scss";
import Topbar from "../../components/topbar/Topbar";
import Intro from "../../components/intro/Intro";
import Portfolio from "../../components/portfolio/Portfolio";
import Works from "../../components/works/Works";
import Testimonials from "../../components/testimonials/Testimonials";
import Contact from "../../components/contact/Contact";
import Menu from "../../components/menu/Menu";
import Login from "../../components/Login/Login";
import { useState } from "react";

export default function Main() {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="main">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
      <Login/>
    </div>
    </div>
  )
}
