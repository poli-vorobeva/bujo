import store from "./store";
export type AppDispatch = typeof store.dispatch;

export interface IUser {
  user: {
    email: string;
    password: string;
    id: string;
    name: string;
  };
}

export interface IUserData {
  userData: {
    email: string;
    password: string;
    name: string;
  };
}

export interface IUserAuth {
  email: string;
  password: string;
}

export interface IUserReg {
  email: string;
  password: string;
  name: string;
}

export interface IResponseUserData {
  status: string;
  name: string;
  password: string;
  email: string;
}

export type typeItem = { day: string; time: Array<number> };
export type typeDataForCanvasChart = typeItem[];

export interface IResponseCanvasChart {
  status: string;
  data: typeDataForCanvasChart;
}

export interface IHabbit {
  habbitName: string;
  habbitId: string;
  data: boolean[];
}

export interface IHabbitsData {
  days: number;
  habbits: IHabbit[];
}
export interface IResponseHabbits {
  status: string;
  data: IHabbitsData;
}
interface ILocation {
  x: number;
  y: number;
}

export interface IImagesArray {
  id: string;
  name: string;
  src: string;
  coordinate: ILocation;
  width: number;
  height: number;
  isMove?: boolean;
  img?: Promise<HTMLImageElement>;
}
export interface IIntStBgImg {
  data: {
    habbitImgBg: IImagesArray[];
    clockImg?: number[]; ///тут додати фони для інших колекцій
  };
}
export interface IImgBgResponse {
  status: string;
  data: {
    data: IImagesArray[];
    type: "habbitImgBg";
  };
}
