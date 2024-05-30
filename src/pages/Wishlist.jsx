import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);
  
  const clearWishlist = () => {
    localStorage.removeItem("wishlist");
    setWishlist([]);
  };

  return (
    <div className="h-auto p-4 bg-slate-800 text-white">
      <button className="flex" onClick={clearWishlist}>
        Clear <MdDelete className="mt-1.5" />
      </button>
      <h1 className="text-white text-center text-xl mb-5 italic">
        Your Favorites!
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {wishlist.map((movie, index) => (
          <Link key={index} to={`/detail/${movie.id}`}>
            <Card title={movie.title} image={movie.poster_path} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
