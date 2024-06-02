import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import { FaUser } from "react-icons/fa";

const Navbar = () =>{
    return (
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMKzdm5ew14_oEIeRoRNqWrg5eWOAQkp80w&s"
            alt="logo" className="w-28"
          />
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/popular"} className="mr-5 hover:text-white text-lg">
              Popular
            </Link>
            <Link to={"/toprated"} className="mr-5 hover:text-white text-lg">
              Top-Rated
            </Link>
            <Link to={"/upcoming"} className="mr-5 hover:text-white text-lg">
              Upcoming
            </Link>
            <Link to={"/series"} className="mr-5 hover:text-white text-lg">
              Series
            </Link>
            <Link to={"/wishlist"} className="mr-5 hover:text-white text-lg">
              Wishlist
            </Link>
          </nav>
          <Searchbar />
          <Link to={"/profile"} className="ml-5 text-xl">
            <FaUser />
          </Link>
        </div>
      </header>
    );
}
export default Navbar;