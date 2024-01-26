import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class substraction10 extends GeneratedSimpleCalcTask {
  public static taskId = "substraction10"

  public static generate(): substraction10 {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const simpleTask = `${firstNumber} - ${secondNumber}`;
    const latexTask = `${firstNumber} - ${secondNumber}`;
    const simpleSolution = `${firstNumber - secondNumber}`;
    const latexSolution = `${firstNumber - secondNumber}`;
    const version="4"
    return new substraction10(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default substraction10;
