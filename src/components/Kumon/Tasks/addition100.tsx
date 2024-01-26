import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class addition100 extends GeneratedSimpleCalcTask {
  public static taskId = "simple-addition"
  public static generate(): addition100 {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const simpleTask = `${firstNumber} + ${secondNumber}`;
    const latexTask = `${firstNumber} + ${secondNumber}`;
    const simpleSolution = `${firstNumber + secondNumber}`;
    const latexSolution = `${firstNumber + secondNumber}`;
    const version="2"
    return new addition100(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default addition100;
