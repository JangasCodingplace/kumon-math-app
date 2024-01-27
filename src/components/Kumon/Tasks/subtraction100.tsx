import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class substraction100 extends GeneratedSimpleCalcTask {
  public static taskId = "substraction10"

  public static generate(): substraction100 {
    const firstNumber = Math.floor(Math.random() * 100 +1);
    const secondNumber = Math.floor(Math.random() * firstNumber+1);
    const simpleTask = `${firstNumber} - ${secondNumber}`;
    const latexTask = `${firstNumber} - ${secondNumber}`;
    const simpleSolution = `${firstNumber - secondNumber}`;
    const latexSolution = `${firstNumber - secondNumber}`;
    const version="4"
    return new substraction100(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default substraction100;
