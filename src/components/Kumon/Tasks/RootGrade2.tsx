import { GeneratedSimpleCalcTask } from "../GenericTask";


/*
  * This class is used to generate a tasks for calculating the roots
  * of a quadratic equation.
  */
class RootGrade2 extends GeneratedSimpleCalcTask {
  public static taskId = "root-grade-2"

  public static generate(): RootGrade2 {
    const root1 = Math.floor(Math.random() * 20);
    const root2 = Math.floor(Math.random() * -20);
    const factor = Math.floor(Math.random() * 9);

    const a = factor
    const b = factor * (root1 + root2)
    const c = factor * root1 * root2 
    const simpleTask = `${a}x^2 + ${b}x + ${c}`;
    const latexTask = `${a}x^2 + ${b}x + ${c}`;

    const simpleSolution = `${root1}, ${root2}`;
    const latexSolution = `${root1}, ${root2}`;

    const version="1"
    return new RootGrade2(simpleTask, latexTask, simpleSolution, latexSolution,version);
  }
}

export default RootGrade2;
