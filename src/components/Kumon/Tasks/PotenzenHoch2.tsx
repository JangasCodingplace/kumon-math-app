import { GeneratedSimpleCalcTask } from "../GenericTask";
import { version } from "react";

class Potenzen2 extends GeneratedSimpleCalcTask {
  public static taskId = "Potenzen2"

  public static generate(): Potenzen2{
    let base = Math.floor(Math.random() * 10+1);
    let exponent = Math.floor(Math.const() * 2)
    let simpleTask = base + '^' + exponent;
   let  latexTask = base + '^' + exponent;;
   let  simpleSolution = base + '^' + exponent;
    let latexSolution =base + '^' + exponent; 
    return new Potenzen2(simpleTask, latexTask, simpleSolution, latexSolution);
  }
}

export default Potenzen2;