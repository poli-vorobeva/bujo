import React from "react";
interface ICheck {
  check: boolean;
  id: string;
  handleClick: () => void;
}
const Input = ({ check, id, handleClick }: ICheck) => {
  return (
    <input
      type="checkbox"
      id={id}
      defaultChecked={check}
      onClick={handleClick}
    />
  );
};

export default Input;
