import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#B8898E]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <h1 className="cursor-pointer text-3xl font-semibold tracking-wide text-white">
          StaySphere
        </h1>
        <div className="hidden items-center gap-10 md:flex">
          <a href="/" className="text-[15px] font-medium text-white transition-all duration-300 hover:text-[#B8898E]">
            Home
          </a>

          <a href="#hotels" className="text-[15px] font-medium text-white transition-all duration-300 hover:text-[#B8898E]">
            Hotels
          </a>

          <a href="#contact" className="text-[15px] font-medium text-white transition-all duration-300 hover:text-[#B8898E]">
            Contact
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-[#5E5247] md:hidden">
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

      </nav>

      <div className={`overflow-hidden bg-white/80 backdrop-blur-xl transition-all duration-300 md:hidden ${menuOpen ? "max-h-60 border-t border-[#E8E1D9]" : "max-h-0"}`}>
        <div className="flex flex-col gap-6 px-6 py-6">
          <a href="/" onClick={() => setMenuOpen(false)} className="text-white transition hover:text-[#B8898E]">
            Home
          </a>

          <a href="#hotels" onClick={() => setMenuOpen(false)} className="text-white transition hover:text-[#B8898E]">
            Hotels
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white transition hover:text-[#B8898E]">
            Contact
          </a>
        </div>
      </div>

    </header>
  );
};

export default Navbar;