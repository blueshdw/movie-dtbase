import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white bg-navyBlue flex justify-between items-center py-4 px-4 md:px-10 sticky top-0 w-full z-[999]">
      <div className="flex justify-between items-center w-full">
        <Link to={"/"}>
          <h1 className="logo text-2xl font-bold cursor-pointer select-none">
            REACTFLİX
          </h1>
        </Link>
        <div className="flex items-center">
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
              <FaBars />
            </button>
          </div>
          <nav className={`navbar absolute top-full md:top-auto right-0 bg-navyBlue p-2 ml-0 md:ml-10 ${isMenuOpen ? "block" : "hidden" }  md:block`}>
            <ul className="nav-list flex flex-col md:flex-row items-center gap-5">
              <li className="nav-item text-xl text-orange hover:text-white duration-200 relative after:absolute after:h-[2px] after:w-0 hover:after:w-full after:duration-200 after:bg-orange after:-bottom-1 after:flex">
                <Link to={"/my-playlist"}>My Playlist</Link>
              </li>
              <li className="nav-item text-xl text-orange hover:text-white duration-200 relative after:absolute after:h-[2px] after:w-0 hover:after:w-full after:duration-200 after:bg-orange after:-bottom-1 after:flex">
                <Link to={"/my-favorites"}>My Favorites</Link>
              </li>
            </ul>
          </nav>
        
        </div>
      </div>
      
    </header>
  );
};

export default Header;
