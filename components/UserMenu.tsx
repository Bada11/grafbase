"use client";
import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

import { SessionInterface } from "@/common.types";

const UserMenu = ({ session }: { session: SessionInterface }) => {
  return (
    <div className="bg-white z-10">
      <Menu as="div" className="bg-white z-10">
        <Menu.Button>
          <div className="gap-3 flex">
            {session?.user?.image && (
              <Image
                src={session.user.image}
                width={30}
                height={30}
                className="rounded-full w-[40px] h-[40px]"
                alt={session.user.name}
              />
            )}
          </div>

          <Menu.Items
            className="absolute flex flex-col mt-10 right-[40px]
           shadow p-10 rounded-xl text-[15px] flex-start w-[300px]"
          >
            <div className="flex flex-col items-center gap-y-4">
              {session?.user?.image && (
                <Image
                  src={session.user.image}
                  width={80}
                  height={80}
                  className="rounded-full  flex text-center"
                  alt={session.user.name}
                />
              )}
            </div>
            <h1 className="text-[20px] text-center py-4">
              {session?.user?.name}
            </h1>

            <Menu.Item className="mt-2 text-left text-sm text-[#5f5f5f]">
              <Link href="/profile">Profile</Link>
            </Menu.Item>

            <Menu.Item className="mt-2 text-left text-[#5f5f5f]">
              <Link href="/profile">Setting</Link>
            </Menu.Item>

            <Menu.Item className="mt-2 text-left text-[#5f5f5f]">
              <Link href="/profile">Work Preference</Link>
            </Menu.Item>

            <Menu.Item className="mt-2 text-left text-[#5f5f5f]">
              <button onClick={() => signOut()}>Sign out</button>
            </Menu.Item>
          </Menu.Items>
        </Menu.Button>
      </Menu>
    </div>
  );
};

export default UserMenu;
