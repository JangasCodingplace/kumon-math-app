import { GeneratedSimpleCalcTask } from "../GenericTask";


class SimpleAddition extends GeneratedSimpleCalcTask {
  public static taskId = "simple-addition"
  public static generate(): SimpleAddition {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const simpleTask = `${firstNumber} +r ${secondNumber}`;
    const latexTask = `${firstNumber} + ${secondNumber}`;
    const simpleSolution = `${firstNumber + secondNumber}`;
    const latexSolution = `${firstNumber + secondNumber}`;
    return new SimpleAddition(simpleTask, latexTask, simpleSolution, latexSolution);
  }
}

export default SimpleAddition;
