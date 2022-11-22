import { barRangeData, typeItem } from "../mockData";
import * as React from "react";

type propsType = {
  setDates: (datesArray: typeItem[], mark: string) => void;
};
const ButtonsComponent = (props: propsType) => {
  return (
    <>
      <button
        onClick={() =>
          props.setDates(
            barRangeData.filter((e) => !e.time.length),
            "add"
          )
        }
      >
        Add Data
      </button>
      <button
        onClick={() =>
          props.setDates(
            barRangeData.filter((e) => e.time.length),
            "edit"
          )
        }
      >
        Change Data
      </button>
    </>
  );
};
export default ButtonsComponent;
