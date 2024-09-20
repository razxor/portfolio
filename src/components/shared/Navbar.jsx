import React from "react";
import ReactDOM from 'react-dom';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Portfolio</a></li>                        
                        <li><a>Blog</a></li>                        
                        <li><a>Hire Me</a></li>                        
                    </ul>
                </div>
                <a className="text-6xl font-bold">
                    R<span className="text-orange-600">a</span>z
                </a>
            </div>
       
            <div className="navbar-end hidden lg:flex mr-28">
                <ul className="flex gap-5 px-1">
                    <li className="py-3 px-4 text-lg font-semibold"><a>Portfolio</a></li>
                    <li className="py-3 px-4 text-lg font-semibold"><a>Blog</a></li>
                    <li className="py-3 px-4 bg-orange-500 rounded text-white text-lg font-semibold"><a>Hire Me</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar