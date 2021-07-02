import React from "react";
import { Link } from "react-router-dom";

const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <nav className="w-full fixed top-0 h-14 bg-white px-4 flex justify-center items-center">
        <p className="font-bold text-lg">Social Media</p>
      </nav>

      <div className="w-1/3 mx-auto mt-14">{children}</div>
      <footer className="w-full fixed bottom-0 mx-auto flex self-center bg-white h-14 shadow-sm p-4 items-center z-20">
        <div className="w-1/3 mx-auto grid grid-cols-3">
          <div className="footer-content__grid flex justify-center">
            <Link to="/">
              <p>Home</p>
            </Link>
          </div>
          <div className="footer-content__grid flex justify-center">
            <Link to="#">
              <p>Add</p>
            </Link>
          </div>
          <div className="footer-content__grid flex justify-center">
            <Link to="/user/1">
              <p>Profile</p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Wrapper;
