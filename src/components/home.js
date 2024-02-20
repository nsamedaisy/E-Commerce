import React from "react";

const HomePage = () => {
  return (
    <div>
      <header>
        <div
          className="top-header"
          style={{ backgroundImage: "url('./img.jpg')" }}
        >
          {/* Background image goes here */}
        </div>
        <div className="bottom-header">
          <nav>
            <ul>
              <li>
                <a href="/body-care">Body Care</a>
              </li>
              <li>
                <a href="/home-fragrance">Home Fragrance</a>
              </li>
              <li>
                <a href="/gifts">Gifts</a>
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
