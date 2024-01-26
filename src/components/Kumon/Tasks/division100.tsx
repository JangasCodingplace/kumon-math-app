import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";
import division10 from "./division10";


class division100 extends GeneratedSimpleCalcTask {
  public static taskId = "division100"
  public static generate(): division100 {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const thirdNumber = firstNumber * secondNumber; 
    const simpleTask = `${thirdNumber} / ${firstNumber}`;
    const latexTask = `${thirdNumber} / ${firstNumber}`;
    const simpleSolution = `${secondNumber}`;
    const latexSolution = `${secondNumber}`;
    const version="2"
    return new division100(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default division100;
