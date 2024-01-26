import { version } from "react";
import { GeneratedSimpleCalcTask } from "../GenericTask";


class PunktVorStrichPlus extends GeneratedSimpleCalcTask {
  public static taskId = "PunktVorStrichPlus"
  public static generate(): PunktVorStrichPlus {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const thirdNumber = Math.floor(Math.random() * 100);
    const simpleTask = `${firstNumber} * ${secondNumber} + ${thirdNumber}`;
    const latexTask = `${firstNumber} * ${secondNumber} + ${thirdNumber}`;
    const simpleSolution = `${firstNumber * secondNumber + thirdNumber}`;
    const latexSolution = `${firstNumber * secondNumber + thirdNumber}`;
    const version="2"
    return new  PunktVorStrichPlus(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default PunktVorStrichPlus;