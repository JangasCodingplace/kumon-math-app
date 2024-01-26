import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class addition1000 extends GeneratedSimpleCalcTask {
  public static taskId = "addition1000"
  public static generate(): addition1000 {
    const firstNumber = Math.floor(Math.random() * 1000);
    const secondNumber = Math.floor(Math.random() * 1000);
    const simpleTask = `${firstNumber} + ${secondNumber}`;
    const latexTask = `${firstNumber} + ${secondNumber}`;
    const simpleSolution = `${firstNumber + secondNumber}`;
    const latexSolution = `${firstNumber + secondNumber}`;
    const version="2"
    return new addition1000(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default addition1000;