import { GeneratedSimpleCalcTask } from "../GenericTask";


class RootGrage2 extends GeneratedSimpleCalcTask {

    public static generate(): RootGrage2 {
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
        return new RootGrage2(simpleTask, latexTask, simpleSolution, latexSolution);
    }
}

export default RootGrage2;
