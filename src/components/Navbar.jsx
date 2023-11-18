import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md border border-sky-300">
            <p className="blue-gradient_text border border-sky-200 rounded-lg">RP</p>
        </NavLink>
        <nav></nav>
    </header>
  )
}

export default Navbar