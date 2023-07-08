"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "./FormInput";
import Image from "next/image";
import { SessionInterface } from "@/common.types";

type Props = {
  type: string;
  session: SessionInterface;
};

const CreateProject = ({ type, session }: Props) => {
  const [form, setForm] = useState({ image: "" });

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      alert("Please upload an image!");

      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange("image", result);
    };
  };

  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {};

  return (
    <form className="w-full" onSubmit={handleFormSubmit}>
      <div className="border p-10 w-full h-[200px] text-center mt-5">
        {!form.image ? (
          <label className=" text-center">Choose Image Poster</label>
        ) : (
            <div>
          <Image
            src={form?.image}
            className="sm:p-10 w-[50px] object-contain z-20"
            alt="image"
          />
          </div>
        )}
        <input
          type="file"
          className=" absolute w-full opacity-0 h-full cursor-pointer text-center"
          onChange={handleImageChange}
          id="image"
          accept="image/*"
          required={type === "create" ? true : false}
        />
      </div>
    </form>
  );
};

export default CreateProject;
