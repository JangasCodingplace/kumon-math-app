import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class subtraction100 extends GeneratedSimpleCalcTask {
  public static taskId = "substraction10"

  public static generate(): subtraction100 {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const simpleTask = `${firstNumber} - ${secondNumber}`;
    const latexTask = `${firstNumber} - ${secondNumber}`;
    const simpleSolution = `${firstNumber - secondNumber}`;
    const latexSolution = `${firstNumber - secondNumber}`;
    const version="4"
    return new subtraction(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default subtraction100;
