import React from "react";

import styled from "styled-components";
import { IHabbit } from "../../dto";

import Habbit from "./habbit";
import Input from "./input";
import Btn from "./btn";

interface IHabbits {
  listOfHabbits: IHabbit[];
  width: number;
}

interface IHabbitContainer {
  width: number;
}
const HabbitContainer = styled.div<{ styledComp: IHabbitContainer }>`
  display: grid;
  grid-template-columns: 100px repeat(
      21,
      ${({ styledComp }) => styledComp.width}px
    );
`;

const Habbits = ({ listOfHabbits, width }: IHabbits) => {
  const widthHabbit = (width - 100) / 21;
  const habbits = listOfHabbits.slice().map((it) => {
    return (
      <HabbitContainer key={it.habbitId} styledComp={{ width: widthHabbit }}>
        <Habbit text={it.habbitName} key={it.habbitId} id={it.habbitId} />
        {it.data.map((el, ind) => (
          <Input habbitId={it.habbitId} id={String(ind)} check={el} key={ind} />
        ))}
      </HabbitContainer>
    );
  });
  return (
    <>
      {habbits}
      <Btn />
    </>
  );
};
export default Habbits;
