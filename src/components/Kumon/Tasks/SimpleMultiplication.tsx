import { GeneratedSimpleCalcTask } from "../GenericTask";


class SimpleMultiplication extends GeneratedSimpleCalcTask {
  public static taskId = "simple-multiplication"

  public static generate(): SimpleMultiplication{
    const firstNumber = Math.floor(Math.random() * 5+1);
    const secondNumber = Math.floor(Math.random() * 5+1);
    const simpleTask = `${firstNumber} * ${secondNumber}`;
    const latexTask = `${firstNumber} * ${secondNumber}`;
    const simpleSolution = `${firstNumber * secondNumber}`;
    const latexSolution = `${firstNumber * secondNumber}`;
    return new SimpleMultiplication(simpleTask, latexTask, simpleSolution, latexSolution);
  }
}

export default SimpleMultiplication;
