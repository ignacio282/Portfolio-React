import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-white py-5 px-4 font-main text-main-text md:px-20">
      <div className="flex justify-between items-center ">
        <Link to="/" className="text-lg font-bold hover:text-teal-accent md:text-xl ">IGNACIO VERGARA</Link>
        <div className="flex gap-5 text-sm font-bold ">
          <Link to="/projects" className="hover:text-teal-accent">Projects</Link>
          <Link to="/Resume" className="hover:text-teal-accent">Resume</Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
