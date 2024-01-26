import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class subtraction10 extends GeneratedSimpleCalcTask {
  public static taskId = "simple-substraction"

  public static generate(): SimpleSubtraction {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const simpleTask = `${firstNumber} - ${secondNumber}`;
    const latexTask = `${firstNumber} - ${secondNumber}`;
    const simpleSolution = `${firstNumber - secondNumber}`;
    const latexSolution = `${firstNumber - secondNumber}`;
    const version="4"
    return new SimpleSubtraction(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default SimpleSubtraction;
