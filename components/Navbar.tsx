import { NavLinks } from "@/constants";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const session = {};
  return (
    <div className="flex justify-between p-5">
      <h1 className="text-[30px] logo">Swipe</h1>

      <ul className="flex gap-3 sm:flex hidden">
        <li className="flex gap-5">
          {NavLinks.map((nav) => (
            <Link href="/" key={nav.key}>
              {nav.text}
            </Link>
          ))}
        </li>
      </ul>

      {!session ? "AuthProvider" : <Link href="/create">Create</Link>}
    </div>
  );
};

export default Navbar;
