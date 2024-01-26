import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class subtraction1000 extends GeneratedSimpleCalcTask {
  public static taskId = "substraction1000"

  public static generate(): subtraction1000 {
    const firstNumber = Math.floor(Math.random() * 1000);
    const secondNumber = Math.floor(Math.random() * 1000);
    const simpleTask = `${firstNumber} - ${secondNumber}`;
    const latexTask = `${firstNumber} - ${secondNumber}`;
    const simpleSolution = `${firstNumber - secondNumber}`;
    const latexSolution = `${firstNumber - secondNumber}`;
    const version="4"
    return new subtraction1000(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default subtraction1000;
