import { GeneratedSimpleCalcTask } from "./GenericTask";
import SimpleAddition from "./Tasks/SimpleAddition";
import SimpleSubtraction from "./Tasks/SimpleSubtraction";
import RootGrade2 from "./Tasks/RootGrade2";
import Addition10 from "./Tasks/Addition10";
import addition100 from "./Tasks/addition100";
import addition1000 from "./Tasks/addition1000";

import Multiplication10 from "./Tasks/Muliplikation10";
import Multiplication100 from "./Tasks/Multiplication100";

import substraction100 from "./Tasks/subtraction100";
import subtraction1000 from "./Tasks/subtraction1000";

import division100 from "./Tasks/division100";
import division10 from "./Tasks/division10";
import PunktVorStrichPlus from "./Tasks/PunktVorStrichPlus";


interface Profile {
  name: string
  taskTypes: typeof GeneratedSimpleCalcTask[]
}


const profiles: Profile[] = [
  {
    name: "Addition",
    taskTypes: [ Addition10,addition100,addition1000]
  },
  {
    name: "Subtrahieren",
    taskTypes: [substraction100,subtraction1000]
  },
  {
    name: "Multiplikation",
    taskTypes: [Multiplication10,Multiplication100]
  },{
    name: "Division",
    taskTypes: [division10,division100,]
  },{
    name: "PunktVorStrichPlus",
    taskTypes: [PunktVorStrichPlus,]
  }
]


export default profiles;
