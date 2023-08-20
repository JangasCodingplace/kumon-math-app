import { GeneratedSimpleCalcTask } from "./GenericTask";
import SimpleAddition from "./Tasks/SimpleAddition";
import SimpleSubtraction from "./Tasks/SimpleSubtraction";
import RootGrade2 from "./Tasks/RootGrade2";


interface Profile {
  name: string
  taskTypes: typeof GeneratedSimpleCalcTask[]
}


const profiles: Profile[] = [
  {
    name: "5-simple",
    taskTypes: [SimpleAddition, SimpleSubtraction]
  },
  {
    name: "10-simple",
    taskTypes: [RootGrade2]
  },
  {
    name: "11-ef",
    taskTypes: [RootGrade2]
  }
]


export default profiles;
