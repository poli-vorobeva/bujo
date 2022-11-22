export type typeItem = { day: string; time: Array<number> };
export type typeDataForChart = typeItem[];
export const barRangeData: typeDataForChart = [
  {
    day: "1",
    time: [],
    //time: [5, 2]
  },
  {
    day: "2",
    time: [],
    //time: [6, 24]
  },
  {
    day: "3",

    time: [],
    //time: [5, 21]
  },
  {
    day: "4",

    time: [],
    //time: [5, 21]
  },
  {
    day: "5",

    time: [],
    //time: [5, 21]
  },
  {
    day: "6",

    time: [],
    //time: [5, 20]
  },
  {
    day: "7",

    time: [],
    //time: [5, 10]
  },
  {
    day: "8",

    time: [],
    //time: [8, 21]
  },
  {
    day: "9",

    time: [],
    //time: [5, 24]
  },
  {
    day: "10",

    time: [],
    //time: [5, 22]
  },
  {
    day: "11",

    time: [],
    //time: [5, 2]
  },
  {
    day: "12",

    time: [],
    //time: [6, 24]
  },
  {
    day: "13",

    time: [],
    //time: [5, 21]
  },
  {
    day: "14",

    time: [],
    //time: [5, 21]
  },
  {
    day: "15",

    time: [],
    //time: [5, 21]
  },
  {
    day: "16",

    time: [],
    //time: [5, 20]
  },
  {
    day: "17",

    time: [],
    //time: [10, 5]
  },
  {
    day: "18",

    time: [],
    //time: [8, 21]
  },
  {
    day: "19",

    time: [],
    //time: [5, 24]
  },
  {
    day: "20",

    time: [],
    //time: [5, 22]
  },
  {
    day: "21",
    time: [5, 2],
  },
  {
    day: "22",
    time: [6, 24],
  },
  {
    day: "23",
    time: [5, 21],
  },
  {
    day: "24",
    time: [5, 21],
  },
  {
    day: "25",
    time: [5, 21],
  },
  {
    day: "26",
    time: [20, 5],
  },
  {
    day: "27",
    time: [10, 5],
  },
  {
    day: "28",
    time: [],
  },
  {
    day: "29",
    time: [],
  },
  {
    day: "30",
    time: [],
  },
];
const sortByTime = (a: number, b: number) => {
  //18 24
  //0-12
  //
  //18 24
  //18 2
  console.log(a, "--,--", b);

  if ((a >= 18 || a <= 24) && b < 18) {
    return b - a;
  } else if (a < 18 && b < 18) {
    return a - b;
  }
  return b - a;
};
