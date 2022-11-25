import { ISettingHabbit } from "../dto";

interface HabbitData {
    habbitName: string;
    habbitId: string;
    data: boolean[];
}
const listOfHabbits = [
    {
        habbitName: 'dd',
        habbitId:'fvfvf',
        data: [false, false,true,true,false,true, false,true,true,false,true, false,true,true,false,true, false,true,true,false,true]
    },
    {
        habbitName: 'fff',
        habbitId:'fvffvfvf',
        data: [true, false,true,false,false,true, false,true,true,false,true, false,true,true,false,true, false,true,true,false,true]
    },
    {
        habbitName: 'dfvfvd',
        habbitId:'fvf33vf',
        data: [true, false,true,true,false,true, false,true,true,false,true, false,true,true,false,true, false,true,true,false,true]
    },
    {
        habbitName: 'fffvfvfvf',
        habbitId:'fvfvfefef',
        data: [true, false,true,true,false,true, false,true,true,false,true, false,true,true,false,true, false,true,true,false,true]
    },
]
export const dataHabbits = {
    days: 21,
    habbits: listOfHabbits,
    settings:{
        opacity: 1,
        color: 'black',
        bg: 1,
      }
}

export interface IDataHabbits{
    days: number
    habbits: HabbitData[];
    setting: ISettingHabbit;
}