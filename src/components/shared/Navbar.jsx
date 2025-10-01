"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import brandLogo from "../../assets/logo.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ✅ Common Links
  const commonLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/course">Course</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/support">Support</Link>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  // ✅ Private Links (dummy)
  const privateLinks = (
    <>
      <li>
        <Link href="/blogs/create">Post Blog</Link>
      </li>
      <li>
        <Link href="/my-blogs">My Blogs</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm text-gray-900 px-8  w-full border-b border-gray-300">
      {/* ---------------- LEFT SIDE ---------------- */}
      <div className="navbar-start">
        {/* ✅ Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 p-2 shadow w-40"
          >
            {commonLinks}
            {privateLinks}
          </ul>
        </div>

        {/* ✅ Logo + Title */}
        <Link
          href="/"
          className="flex btn btn-ghost p-2 rounded items-center gap-2 text-xl font-bold text-gray-700"
        >
          <Image
            src={brandLogo}
            width={36}
            height={36}
            alt="brand logo"
            className="rounded-full"
          />
          CPS Academy
        </Link>
      </div>

      {/* ---------------- CENTER ---------------- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{commonLinks}</ul>
      </div>

      {/* ---------------- RIGHT SIDE ---------------- */}
      <div className="navbar-end gap-2 lg:gap-3">
        {/* ✅ Theme Toggle */}
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-white row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <circle cx="10" cy="10" r="4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path d="M21.64 13A9 9 0 1 1 11 2.36 7 7 0 0 0 21.64 13z" />
          </svg>
        </label>

        {/* ✅ Dummy Avatar + Button */}
        <Image
          src={
            "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
          }
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full w-8 h-8 lg:w-10 lg:h-10"
        />
        <button className="px-2 py-[6px] lg:px-4 lg:py-2 cursor-pointer btn btn-accent  text-white text-sm lg:text-lg rounded">
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
