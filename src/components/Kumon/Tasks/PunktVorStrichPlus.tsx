import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class Multiplication10 extends GeneratedSimpleCalcTask {
  public static taskId = "simple-Multiplication"
  public static generate(): Multiplication10 {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const thirdNumber = Math.floor(Math.random() + 100);
    const simpleTask = `${firstNumber} * ${secondNumber} + ${thirdNumber}`;
    const latexTask = `${firstNumber} * ${secondNumber} + ${thirdNumber}`;
    const simpleSolution = `${firstNumber * secondNumber + thirdNumber}`;
    const latexSolution = `${firstNumber * secondNumber + thirdNumber}`;
    const version="2"
    return new  Multiplication10(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default Multiplication10;