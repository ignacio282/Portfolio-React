
const Navbar = () => {
  return (
    <nav className="bg-white py-5 px-4 font-main text-main-text md:px-20">
      <div className="flex justify-between items-center ">
        <span className="text-lg font-bold hover:text-teal-accent md:text-xl ">IGNACIO VERGARA</span>
        <div className="flex gap-5 text-sm font-bold ">
          <a href="#" className="hover:text-teal-accent">Projects</a>
          <a href="#" className="hover:text-teal-accent">Resume</a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;
