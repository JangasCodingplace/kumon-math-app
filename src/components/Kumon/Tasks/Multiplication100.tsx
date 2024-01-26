import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class Multiplication100 extends GeneratedSimpleCalcTask {
  public static taskId = "multiplication100"
  public static generate(): Multiplication100 {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const simpleTask = `${firstNumber} *r ${secondNumber}`;
    const latexTask = `${firstNumber} * ${secondNumber}`;
    const simpleSolution = `${firstNumber * secondNumber}`;
    const latexSolution = `${firstNumber * secondNumber}`;
    const version="2"
    return new Multiplication100(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default Multiplication100;
