import { GeneratedSimpleCalcTask } from "./GenericTask";
import SimpleAddition from "./Tasks/SimpleAddition";
import SimpleSubtraction from "./Tasks/SimpleSubtraction";
import RootGrade2 from "./Tasks/RootGrade2";
import Addition10 from "./Tasks/Addition10";
import addition100 from "./Tasks/addition100";
import Multiplication100 from "./Tasks/Muliplikation10";

interface Profile {
  name: string
  taskTypes: typeof GeneratedSimpleCalcTask[]
}


const profiles: Profile[] = [
  {
    name: "Addition",
    taskTypes: [Addition10, addition100]
  },
  {
    name: "Subtrahieren",
    taskTypes: [RootGrade2]
  },
  {
    name: "Multiplikation",
    taskTypes: [Multiplication100]
  },{
    name: "Division",
    taskTypes: [RootGrade2]
  }
]


export default profiles;
