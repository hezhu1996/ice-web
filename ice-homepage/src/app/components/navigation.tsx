"use client";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "src/app/constants/index";
import { close, menu } from "src/app/assets";
import Image from "next/image";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav className="z-10">
      <div className="mt-[20px] flex items-center justify-center sm:flex-col">
        <div className="mb-[20px] flex items-end text-black">
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
        <div className="absolute top-7 right-5 flex items-center justify-end sm:hidden">
          <Image
            src={toggle ? close : menu}
            alt="sidebar"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          ></Image>
          <div className={`${toggle ? "flex" : "display-none"} `}>
            <div className="blocker" onClick={() => setToggle(!toggle)}></div>
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } bg-black-gradient sidebar absolute -right-5 top-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
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
      </div>
    </nav>
  );
}
