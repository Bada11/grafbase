import React from "react";

type Props = {
  title: string;
  handleClick?: React.MouseEventHandler;
  styles: string;
};

const Button = ({ title, handleClick, styles }: Props) => {
  return (
    <div>
      <button
        className={`p-2 rounded-[10px] bg-[#00dbde] text-white hover:opacity-50 ${styles}`}
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
