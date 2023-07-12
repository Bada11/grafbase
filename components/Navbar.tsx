import { NavLinks } from "@/constants";
import React from "react";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";
import Image from "next/image";
import Button from "./Button";
import UserMenu from "./UserMenu";

const Navbar = async () => {
  const session = await getCurrentUser();

  return (
    <div className="flex justify-between sm:px-10 sm:py-5 p-5 border">
      <div className="flex gap-[40px]">
        <h1 className="text-[30px] logo">Swipe</h1>

        <ul className="gap-3 xl:flex hidden mt-3">
          <li className="flex gap-5 text-[14px]">
            {NavLinks.map((nav) => (
              <Link href="/" key={nav.key}>
                {nav.text}
              </Link>
            ))}
          </li>
        </ul>
      </div>

      {session?.user ? (
        <>
          <div className=" flex gap-3">
            <UserMenu session={session} />
            <Link href="/create">
              <Button title="Create" styles="" />
            </Link>
          </div>
        </>
      ) : (
        <AuthProviders />
      )}
    </div>
  );
};

export default Navbar;
