import { GeneratedSimpleCalcTask } from "../GenericTask";


class SimpleSubtraction extends GeneratedSimpleCalcTask {

  public static generate(): SimpleSubtraction {
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const simpleTask = `${firstNumber} - ${secondNumber}`;
    const latexTask = `${firstNumber} - ${secondNumber}`;
    const simpleSolution = `${firstNumber - secondNumber}`;
    const latexSolution = `${firstNumber - secondNumber}`;
    return new SimpleSubtraction(simpleTask, latexTask, simpleSolution, latexSolution);
  }
}

export default SimpleSubtraction;
