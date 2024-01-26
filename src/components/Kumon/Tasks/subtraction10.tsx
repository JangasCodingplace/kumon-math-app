import { GeneratedSimpleCalcTask } from "../GenericTask";


class subtraction10 extends GeneratedSimpleCalcTask {
  public static taskId = "simple-substraction"

  public static generate(): subtraction10 {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const simpleTask = `${firstNumber} - ${secondNumber}`;
    const latexTask = `${firstNumber} - ${secondNumber}`;
    const simpleSolution = `${firstNumber - secondNumber}`;
    const latexSolution = `${firstNumber - secondNumber}`;
    return new subtraction10(simpleTask, latexTask, simpleSolution, latexSolution);
  }
}

export default subtraction10;
