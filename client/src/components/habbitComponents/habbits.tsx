import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, IHabbit } from "../../dto";
import {
  changeHabbitsName,
  changeHabbitsInput,
  addNewHabbit,
} from "../../reducer/habbitsData";
import Habbit from "./habbit";
import Input from "./input";

interface IHabbits {
  listOfHabbits: IHabbit[];
}

const Habbits = ({ listOfHabbits }: IHabbits) => {
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
  const habbits = listOfHabbits.slice().map((it) => {
    return (
      <div className="habbit_line" key={it.habbitId}>
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
              handleClickCheckBox(it.habbitId, String(ind), !it)
            }
          />
        ))}
      </div>
    );
  });
  return (
    <>
      {habbits}
      <button onClick={handleClickAddHabbit}>Add new habbit</button>
    </>
  );
};
export default Habbits;
