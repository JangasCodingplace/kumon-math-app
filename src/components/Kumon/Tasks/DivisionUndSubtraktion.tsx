import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class DivisionUndSubtraktion extends GeneratedSimpleCalcTask {
  public static taskId = "DivisionUndSubtraktion"
  public static generate(): DivisionUndSubtraktion {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const thirdNumber = Math.floor(Math.random() * 100);
    const simpleTask = `${firstNumber} : ${secondNumber} - ${thirdNumber}`;
    const latexTask = `${firstNumber} : ${secondNumber} - ${thirdNumber}`;
    const simpleSolution = `${firstNumber / secondNumber - thirdNumber}`;
    const latexSolution = `${firstNumber / secondNumber - thirdNumber}`;
    const version="2"
    return new  DivisionUndSubtraktion(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default DivisionUndSubtraktion;