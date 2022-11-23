import { ReactPropTypes, useEffect, useState } from "react";
import React from "react";
import "./styles.css";
import { typeItem } from "../chartComponents/notUsed/mockData";

export type chooseDateComponent = {
  data: number;
  from: number;
  to: number;
};
const timeArray = [
  18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];
const ChooseTimeComponent = (props: {
  text: string;
  getTime: (data: number) => void;
  timeArr: number[];
}) => {
  //console.log(props.timeArr,'#$#$')
  return (
    <>
      <div>{props.text}</div>
      <div className="chooseDateComponent">
        {props.timeArr.map((e, i) => {
          return (
            <span key={i} onClick={() => props.getTime(e)}>
              {e}
            </span>
          );
        })}
      </div>
    </>
  );
};
const ChooseDateComponent = ({
  handler,
  dateArray,
}: {
  handler: (data: chooseDateComponent) => void;
  dateArray: typeItem[];
}) => {
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [hideMonthComponent, setHideMonthComponent] = useState(false);
  const [showFirstDate, setShowFirstDate] = useState(false);
  const [showSecondDate, setShowSecondDate] = useState(false);
  const [dataToAdd, setDataToAdd] = useState({
    data: null,
    from: null,
    to: null,
  });
  const [secondDates, setSecondDates] = useState([]);
  const clickDate = (date: number) => {
    setHideMonthComponent(true);
    setShowFirstDate(true);
  };
  const hideFirstStep = () =>
    setDaysInMonth((prev) => dateArray.map((el) => el.day));

  useEffect(() => {
    if (!dataToAdd.to) return;
    //todo add check difference between time
    handler(dataToAdd);
  }, [dataToAdd]);
  useEffect(() => hideFirstStep(), []);

  return (
    <>
      {showSecondDate && (
        <ChooseTimeComponent
          text="Время пробуждения"
          timeArr={secondDates}
          getTime={(data) => {
            setShowSecondDate(false);
            setDataToAdd((prev) => ({ ...prev, to: data }));
          }}
        />
      )}
      {showFirstDate && (
        <ChooseTimeComponent
          text="Время отхода ко сну"
          timeArr={timeArray}
          getTime={(data) => {
            setSecondDates(timeArray.slice(timeArray.indexOf(data)));
            setShowFirstDate(false);
            setShowSecondDate(true);
            setDataToAdd((prev) => ({ ...prev, from: data }));
          }}
        />
      )}
      {!hideMonthComponent && (
        <div className="chooseDateComponent">
          {daysInMonth.map((e, i) => {
            return (
              <span
                key={i}
                onClick={() => {
                  setDataToAdd((prev) => ({ ...prev, data: e }));
                  clickDate(e);
                }}
              >
                {e}
              </span>
            );
          })}
        </div>
      )}
    </>
  );
};
export default ChooseDateComponent;
