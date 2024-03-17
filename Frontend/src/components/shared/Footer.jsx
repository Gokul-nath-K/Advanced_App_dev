import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-800 text-white w-full mx-auto max-w-screen p-3 md:flex md:items-center md:justify-between bottom-0 left-0 absolute">
        <span class="text-sm  sm:text-center font-bold">
          © 2023 Event All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center">
          <li
            className="hover:underline me-6 text-center"
            onClick={() => navigate("/term&condition")}
          >
            Terms & conditions
          </li>
          <li className="hover:underline me-6 text-center">About us</li>
          <li className="hover:underline me-6 text-center">Connect</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
