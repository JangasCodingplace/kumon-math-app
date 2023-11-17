import { GeneratedSimpleCalcTask } from "./GenericTask";
import SimpleAddition from "./Tasks/SimpleAddition";
import SimpleSubtraction from "./Tasks/SimpleSubtraction";
import RootGrade2 from "./Tasks/RootGrade2";
import SimpleMultiplication from "./Tasks/SimpleMultiplication";
import ComplexMultiplication from "./Tasks/ComplexMultiplication";
import twoMultiplication from "./Tasks/2Multiplication";
import Potenzen from "./Tasks/potenzen";
import PunktvorStrich from "./Tasks/Punkt-vor-Strich";



interface Profile {
  name: string
  taskTypes: typeof GeneratedSimpleCalcTask[]
}


const profiles: Profile[] = [
  {
    name: "5-simple",
    taskTypes: [SimpleAddition, SimpleSubtraction, SimpleMultiplication, twoMultiplication, PunktvorStrich ]
  },
  {
    name: "10-simple",
    taskTypes: [RootGrade2, ComplexMultiplication, Potenzen]
  },
  {
    name: "11-ef",
    taskTypes: [RootGrade2]
  }
]


export default profiles;
