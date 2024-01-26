import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class Multiplication10 extends GeneratedSimpleCalcTask {
  public static taskId = "simple-Multiplication"
  public static generate(): Multiplication10 {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const simpleTask = `${firstNumber} * ${secondNumber}`;
    const latexTask = `${firstNumber} * ${secondNumber}`;
    const simpleSolution = `${firstNumber * secondNumber}`;
    const latexSolution = `${firstNumber * secondNumber}`;
    const version="2"
    return new  Multiplication10(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default Multiplication10;
