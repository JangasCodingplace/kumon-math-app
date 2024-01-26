import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class SimpleMultiplikation extends GeneratedSimpleCalcTask {
  public static taskId = "simple-Multiplication"
  public static generate(): SimpleMultiplikation {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const simpleTask = `${firstNumber} * ${secondNumber}`;
    const latexTask = `${firstNumber} * ${secondNumber}`;
    const simpleSolution = `${firstNumber * secondNumber}`;
    const latexSolution = `${firstNumber * secondNumber}`;
    const version="2"
    return new  (simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default SimpleMultiplikation;
