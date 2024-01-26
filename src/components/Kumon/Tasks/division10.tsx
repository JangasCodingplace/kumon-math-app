import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class division10 extends GeneratedSimpleCalcTask {
  public static taskId = "division10"
  public static generate(): division10 {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const thirdnumber = firstNumber * secondNumber;
    const simpleTask = `${thirdNumber} : ${firstNumber}`;
    const latexTask = `${thirdNumber} : ${firstNumber}`;
    const simpleSolution = `${secondNumber}`;
    const latexSolution = `${secondNumber}`;
    const version="2"
    return new division10(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default division10;

