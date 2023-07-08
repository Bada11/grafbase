"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const Ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const dismiss = () => {
    router.push("/");
  };
  return (
    <div
      ref={wrapper}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80"
    >
      <div
        onClick={dismiss}
        className="float-right absolute right-5 top-2 cursor-pointer text-white"
      >
        <AiOutlineClose />
      </div>
      <div
        ref={Ref}
        className=" flex justify-start items-center flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 pt-14 pb-72 overflow-auto;
}"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
