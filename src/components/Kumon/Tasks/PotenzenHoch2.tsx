import { GeneratedSimpleCalcTask } from "../GenericTask";
import { version } from "react";

class Potenzen2 extends GeneratedSimpleCalcTask {
  public static taskId = "Potenzen2"

  public static generate(): Potenzen2{
   const base = Math.floor(Math.random() * 10+1);
   const exponent = Math.floor(Math.random() * 2)
   const simpleTask = `${base} + '^' + ${exponent}`;
  const  latexTask = `${base} + '^' + ${exponent}`;;
  const  simpleSolution = `${base} + '^' + ${exponent}`;
   const latexSolution =`${base} + '^' + ${exponent}`; 
    return new Potenzen2(simpleTask, latexTask, simpleSolution, latexSolution);
  }
}

export default Potenzen2;