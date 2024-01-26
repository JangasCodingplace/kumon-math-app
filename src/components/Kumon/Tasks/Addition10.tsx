import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class Addition10 extends GeneratedSimpleCalcTask {
  public static taskId = "simple-addition"
  public static generate(): Addition10 {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const simpleTask = `${firstNumber} + ${secondNumber}`;
    const latexTask = `${firstNumber} + ${secondNumber}`;
    const simpleSolution = `${firstNumber + secondNumber}`;
    const latexSolution = `${firstNumber + secondNumber}`;
    const version="2"
    return new Addition10(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default Addition10;
