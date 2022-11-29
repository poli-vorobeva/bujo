import React from "react";
import styled from "styled-components";
import Day from "./day";

interface IDays {
  count: number;
  width: number;
}
interface IDaysComponent {
  width: number;
}

const DaysComponent = styled.div<{ styledComp: IDaysComponent }>`
  display: grid;
  grid-template-columns: 100px repeat(
      21,
      ${({ styledComp }) => styledComp.width}px
    );
  position: relative;
  z-index: 5;
`;
const Days = ({ count, width }: IDays) => {
  const days = new Array(count)
    .fill(null)
    .map((it, ind) => <Day n={ind + 1} key={ind} />);
  const widthDay = (width - 100) / 21;
  return (
    <DaysComponent styledComp={{ width: widthDay }}>
      <div></div>
      {days}
    </DaysComponent>
  );
};
export default Days;
