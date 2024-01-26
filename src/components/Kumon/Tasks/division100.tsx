import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class division100 extends GeneratedSimpleCalcTask {
  public static taskId = "division100"
  public static generate(): division100 {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const simpleTask = `${firstNumber} : ${secondNumber}`;
    const latexTask = `${firstNumber} : ${secondNumber}`;
    const simpleSolution = `${firstNumber / secondNumber}`;
    const latexSolution = `${firstNumber / secondNumber}`;
    const version="2"
    return new division100(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default division100;