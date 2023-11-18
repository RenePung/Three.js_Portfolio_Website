import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md border border-sky-300">
            <p className="blue-gradient_text border border-sky-200 rounded-lg">RP</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-sky-400' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-sky-400' : 'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar