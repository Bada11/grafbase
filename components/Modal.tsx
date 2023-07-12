"use client";
import React, { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const dismiss = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === overlay.current && dismiss) {
        dismiss();
      }
    },
    [dismiss, overlay]
  );

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-white h-full"
      onClick={handleClick}
    >
      <button
        onClick={dismiss}
        className="float-right absolute right-5 top-5 cursor-pointer text-black z-20"
      >
        <AiOutlineClose />
      </button>
      <div
        ref={wrapper}
        className=" top-0 flex justify-start items-center flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 pt-14 pb-72 overflow-auto body"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
