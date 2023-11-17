import { GeneratedSimpleCalcTask } from "../GenericTask";


class twoMultiplication extends GeneratedSimpleCalcTask {
  public static taskId = "2-multiplication"

  public static generate(): twoMultiplication{
    const firstNumber = Math.floor(Math.random() * 5+1);
    const secondNumber = Math.floor(Math.random() * 5+1);
    const thirdNumber = Math.floor(Math.random() * 5+1)
    const simpleTask = `${firstNumber} * ${secondNumber} * ${thirdNumber}`;
    const latexTask = `${firstNumber} * ${secondNumber} * ${thirdNumber}`;
    const simpleSolution = `${firstNumber * secondNumber} * ${thirdNumber}`;
    const latexSolution = `${firstNumber * secondNumber} * ${thirdNumber}`;
    return new twoMultiplication(simpleTask, latexTask, simpleSolution, latexSolution);
  }
}

export default twoMultiplication;

