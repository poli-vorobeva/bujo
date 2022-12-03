
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch, IHabbit } from "../../dto";
import {
  changeHabbitsName,
  changeHabbitsInput,
  addNewHabbit,
} from "../../reducer/habbitsData";
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
  const dispatch = useDispatch<AppDispatch>();
  const handleClickCheckBox = (
    idHabbit: string,
    idEl: string,
    value: boolean
  ) => {
    dispatch(changeHabbitsInput({ idHabbit, idEl, value }));
  };
  const handleInputHabbitName = (idHabbit: string, value: string) => {
    dispatch(changeHabbitsName({ idHabbit, value }));
  };
  const handleClickAddHabbit = () => {
    dispatch(addNewHabbit());
  };
  const widthHabbit = (width - 100) / 21;
  const habbits = listOfHabbits.slice().map((it) => {
    return (
      <HabbitContainer key={it.habbitId} styledComp={{ width: widthHabbit }}>
        <Habbit
          text={it.habbitName}
          key={it.habbitId}
          handleInput={(e) =>
            handleInputHabbitName(it.habbitId, e.currentTarget.value)
          }
        />
        {it.data.map((el, ind) => (
          <Input
            id={String(ind + 1)}
            check={el}
            key={ind}
            handleClick={() =>
              handleClickCheckBox(it.habbitId, String(ind), !el)
            }
          />
        ))}
      </HabbitContainer>
    );
  });
  return (
    <>
      {habbits}
      <Btn handleClick={handleClickAddHabbit} />
    </>
  );
};
export default Habbits;
