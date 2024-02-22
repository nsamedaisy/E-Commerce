import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/img1.jpg";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const HomePage = () => {
  return (
    <div>
      <header className="shadow-xl">
        <div className="top-header">
          <img src={Image} alt="header" className="h-10 w-full object-cover" />
          {/* Background image goes here */}
        </div>

        <div className="flex pt-10 ml-[48%] mr-32 items-center pb-10">
          <h1 className="text-4xl font-serif font-bold mr-52">SweetCent</h1>

          <div className="flex items-center border px-2 py-1 w-80">
            <input
              type="text"
              placeholder="Search by fragrance ..."
              className="w-full p-1 focus:outline-none"
            />
            <span className="ml-2">
              <FiSearch className="w-5 h-5" />
            </span>
          </div>

          <span className="ml-10">
            <FiShoppingCart className="w-5 h-5" />
          </span>
        </div>

        <div className="mx-20 py-5">
          <nav>
            <ul className="flex justify-between">
              <li>
                <Link to="/body-care">Body Care</Link>
              </li>
              <li>
                <Link to="/home-fragrance">Home Fragrance</Link>
              </li>
              <li>
                <Link to="/gifts">Gifts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="body-content">
        {/* Body content goes here */}
        <h1>Welcome to Sweetcent</h1>
        <p>
          Explore our wide range of body care products, home fragrances, and
          gifts.
        </p>
      </div>
      <footer>
        <div className="footer-content">
          {/* Footer content goes here */}
          <p>
            &copy; {new Date().getFullYear()} Sweetcent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
