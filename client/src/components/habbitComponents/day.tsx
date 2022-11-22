import React from "react";

interface IDay {
  n: number;
}

const Day = ({ n }: IDay) => {
  return <span>{n}</span>;
};
export default Day;
