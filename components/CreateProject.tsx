"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "./FormInput";
import Image from "next/image";
import { SessionInterface, FormState } from "@/common.types";
import Button from "./Button";
import DropDownButton from "./DropDownButton";
import { categoryFilters } from "@/constants";
import { createNewProject, fetchToken } from "@/lib/actions";
import { useRouter } from "next/navigation";

type Props = {
  type: string;
  session: SessionInterface;
};

const CreateProject = ({ type, session }: Props) => {
  const [form, setForm] = useState<FormState>({
    image: "",
    title: "",
    description: "",
    linkedInUrl: "",
    Url: "",
    githubUrl: "",
    categories: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleStateChange = (fieldName: string, value: string) => {
    setForm((prevState) => ({ ...prevState, [fieldName]: value }));
  };

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

      console.log(result);

      handleStateChange("image", result);
    };
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !form.image ||
      !form.title ||
      !form.description ||
      !form.githubUrl ||
      !form.linkedInUrl ||
      !form.Url ||
      !form.categories
    )
      return;

    setSubmitting(true);

    const { token } = await fetchToken();

    try {
      if (type === "create") {
        await createNewProject(form, session?.user?.id, token);

        router.push("/");
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleFormSubmit}>
      <div className="border p-10 w-full h-auto text-center mt-5 rounded-xl">
        <label htmlFor="poster" className=" text-center">
          {!form.image && "Choose Image Poster"}
        </label>

        <input
          type="file"
          className=" w-full opacity-0 h-full cursor-pointer text-center"
          onChange={handleImageChange}
          id="image"
          accept="image/*"
          required={type === "create" ? true : false}
        />

        {form.image && (
          <div className="w-full lg:min-h-[400px] min-h-[200px] relative">
            <Image
              src={form?.image}
              className="sm:p-10 w-full h-[200px] object-contain z-20"
              alt="image"
              fill
            />
          </div>
        )}
      </div>

      <div className="mt-10">
        <label>
          <FormInput
            title="Project Name"
            state={form.title}
            setState={(value) => handleStateChange("title", value)}
            type="title"
            placeholder="Enter Title"
          />
        </label>

        <label>
          <FormInput
            title="Project Url"
            state={form.Url}
            setState={(value) => handleStateChange("Url", value)}
            type="title"
            placeholder="Enter Project link"
          />
        </label>

        <label>
          <FormInput
            title="Project Github Url"
            state={form.githubUrl}
            setState={(value) => handleStateChange("githubUrl", value)}
            type="title"
            placeholder="Enter Github link"
          />
        </label>

        <label>
          <FormInput
            title="LinkedIn Url"
            state={form.linkedInUrl}
            setState={(value) => handleStateChange("linkedInUrl", value)}
            type="title"
            placeholder="Enter LinkedIn link"
          />
        </label>

        <label>
          <FormInput
            title="Project description"
            state={form.description}
            setState={(value) => handleStateChange("description", value)}
            type="title"
            placeholder="Enter project description"
            isTextArea
          />
        </label>
      </div>

      <div className="mt-10">
        <DropDownButton
          title="Categories"
          setState={(value) => handleStateChange("categories", value)}
          state={form.categories}
          filter={categoryFilters}
        />
      </div>

      <div className="mt-10 w-full">
        <Button
          title={!submitting ? "+ Create" : "Creating..."}
          handleClick={handleFormSubmit}
          styles={
            !submitting ? "w-full sm:w-auto" : "w-full sm:w-auto bg-[#5f5f5f]"
          }
        />
      </div>
    </form>
  );
};

export default CreateProject;
