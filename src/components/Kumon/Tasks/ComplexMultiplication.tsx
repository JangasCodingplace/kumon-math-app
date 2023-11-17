import { GeneratedSimpleCalcTask } from "../GenericTask";


class ComplexMultiplication extends GeneratedSimpleCalcTask {
  public static taskId = "complex-multiplication"

  public static generate(): ComplexMultiplication{
    const firstNumber = Math.floor(Math.random() * 100+1);
    const secondNumber = Math.floor(Math.random() * 100+1);
    const simpleTask = `${firstNumber} * ${secondNumber}`;
    const latexTask = `${firstNumber} * ${secondNumber}`;
    const simpleSolution = `${firstNumber * secondNumber}`;
    const latexSolution = `${firstNumber * secondNumber}`;
    return new ComplexMultiplication(simpleTask, latexTask, simpleSolution, latexSolution);
  }
}

export default ComplexMultiplication;
