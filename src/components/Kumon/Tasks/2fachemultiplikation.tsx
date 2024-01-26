import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class ZweifacheMultiplikation extends GeneratedSimpleCalcTask {
  public static taskId = "ZweifacheMultiplikation"
  public static generate(): ZweifacheMultiplikation {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const thirdNumber = Math.floor(Math.random() * 10);
    const simpleTask = `${firstNumber} * ${secondNumber}* ${thirdNumber}`;
    const latexTask = `${firstNumber} * ${secondNumber}* ${thirdNumber}`;
    const simpleSolution = `${firstNumber * secondNumber * thirdNumber}`;
    const latexSolution = `${firstNumber * secondNumber * thirdNumber}`;
    const version="2"
    return new  ZweifacheMultiplikation(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default ZweifacheMultiplikation;