import React from "react";

interface iHabbit {
  text: string;
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Habbit = ({ text, handleInput }: iHabbit) => {
  return (
    <>
      <input type="text" value={text} onInput={handleInput} />
    </>
  );
};
export default Habbit;
