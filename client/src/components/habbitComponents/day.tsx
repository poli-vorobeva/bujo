import React from "react";
import styled from "styled-components";

interface IDay {
  n: number;
}

const DayComponent = styled.span`
  text-align: center;
`;

const Day = ({ n }: IDay) => {
  return <DayComponent>{n}</DayComponent>;
};
export default Day;
