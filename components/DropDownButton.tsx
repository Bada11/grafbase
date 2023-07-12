import React from "react";
import { Menu } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

type Props = {
  title: string;
  filter: Array<string>;
  state: string;
  setState: (value: string) => void;
};

const DropDownButton = ({ title, filter, state, setState }: Props) => {
  return (
    <div>
      <label>{title}</label>
      <Menu as="div" className="">
        <div className="mt-5">
          <Menu.Button className="p-2 rounded bg-[#eaeaea] flex gap-2 text-[#5f5f5f]">
            {state || "Select a category"}{" "}
            <RiArrowDropDownLine className="text-[20px]" />
          </Menu.Button>
          <Menu.Items className="flex flex-col mt-3 bg-[#eaeaea] p-4 h-[300px] rounded-xl sm:w-[350px] w-full overflow-auto text-gray/40 menu text-[#5f5f5f]">
            {filter.map((tag) => (
              <Menu.Item key={tag} className="mt-4">
                <button
                  value={tag}
                  onClick={(e) => setState(e.currentTarget.value)}
                  className="flex-col"
                >
                  {tag}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </div>
      </Menu>
    </div>
  );
};

export default DropDownButton;
