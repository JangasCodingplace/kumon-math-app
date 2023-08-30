

export interface GenericTask {
  show: () => JSX.Element
}


export interface SimpleCalcTask extends GenericTask {
  simpleTask: string
  latexTask: string
  simpleSolution: string
  latexSolution: string
}

export class GeneratedSimpleCalcTask implements SimpleCalcTask {
  simpleTask: string
  latexTask: string
  simpleSolution: string
  latexSolution: string
  public static taskId: string = "none-unique"

  constructor(simpleTask: string, latexTask: string, simpleSolution: string, latexSolution: string) {
    this.simpleTask = simpleTask
    this.latexTask = latexTask
    this.simpleSolution = simpleSolution
    this.latexSolution = latexSolution
  }

  public static generate(): GeneratedSimpleCalcTask {
    throw new Error("Must be implemented by subclasses");
  }

  show = (): JSX.Element => {
    return <>{this.latexTask}</>
  }
}
