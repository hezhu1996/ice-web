"use client";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "src/app/constants/index";
import { close, menu } from "src/app/assets";
import Image from "next/image";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="z-10">
      <div className="mt-[50px] flex sm:flex-col justify-center items-center">
        <div className="flex items-end text-black">
          <Link href="/homepage">
            <h1 className="text-4xl font-bold">Ruobing Liao</h1>
          </Link>
        </div>

        {/* Big screen, larger than sm, flex; otherwise, hidden default */}
        <ul className="hidden flex-1 space-x-4 text-black sm:flex">
          {navLinks.map((link) => (
            <li key={link.id} className="list-none">
              <Link href={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* Small screen; Larger than sm, hide it; otherwise show */}
        <div className="flex items-center justify-end sm:hidden absolute right-5">
          <Image
            src={toggle ? close : menu}
            alt="sidebar"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          ></Image>
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } bg-black-gradient absolute -right-5 top-10 mx-4 my-2 min-w-[140px] rounded-xl p-6 sidebar`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`
                  font-poppins cursor-pointer text-[16px] font-medium 
                  ${active === link.title ? "text-white" : "text-dimWhite"}
                  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                  `}
                  onClick={() => setActive(link.title)}
                >
                  <Link href={link.id}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
