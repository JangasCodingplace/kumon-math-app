import { GeneratedSimpleCalcTask } from "../GenericTask";


class Potenzen extends GeneratedSimpleCalcTask {
  public static taskId = "Potenzen"

  public static generate(): Potenzen{
    let base = Math.floor(Math.random() * 10+1);
    let exponent = Math.floor(Math.random() * 3+1)
    let simpleTask = base + '^' + exponent;
   let  latexTask = base + '^' + exponent;;
   let  simpleSolution = base + '^' + exponent;
    let latexSolution =base + '^' + exponent; 
    return new Potenzen(simpleTask, latexTask, simpleSolution, latexSolution);
  }
}

export default Potenzen;