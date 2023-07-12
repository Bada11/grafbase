import React from "react";

type Props = {
  title: string;
  placeholder: string;
  type?: string;
  setState: (value: string) => void;
  isTextArea?: boolean;
  state: string;
};

const FormInput = ({
  title,
  placeholder,
  type,
  setState,
  isTextArea,
  state,
}: Props) => {
  return (
    <div className="w-full mt-10">
      <label className="py-2 text-[#5f5f5f] text-[15px]">
        {title}
        {isTextArea ? (
          <textarea
            className="w-full bg-gray-40 rounded-xl bg-[#eaeaea]  p-3 h-[200px] outline-[#00dbde] border mt-5"
            placeholder={placeholder}
            onChange={(e) => setState(e.target.value)}
            value={state}
          ></textarea>
        ) : (
          <input
            placeholder={placeholder}
            onChange={(e) => setState(e.target.value)}
            className=" w-full outline-[#00dbde] bg-light-white-100 bg-[#eaeaea] rounded-xl p-3 mt-5 outline-[2px]"
            type={type || "text"}
            value={state}
          />
        )}
      </label>
    </div>
  );
};

export default FormInput;
