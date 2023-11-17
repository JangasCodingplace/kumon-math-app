import { GeneratedSimpleCalcTask } from "../GenericTask";


class PunktvorStrich extends GeneratedSimpleCalcTask {
  public static taskId = "Punkt-vor-Strich"

  public static generate(): PunktvorStrich{
    let num1 = Math.floor(Math.random() * 10+1);
    let num2 = Math.floor(Math.random() * 10+1)
    let num3 = Math.floor(Math.random() *10+1
    )
let operator1 = Math.random() < 0.5 ? '+': '*';
let operator2 = Math.random() < 0.5 ? '+': '*';


    let simpleTask = '(' + num1 +'' + operator1 + '' + num2 + ')' +'' + operator2 + '' + num3;
   let  latexTask = '(' + num1 +'' + operator1 + '' + num2 + ')' +'' + operator2 + '' + num3;
   let  simpleSolution = '(' + num1 +'' + operator1 + '' + num2 + ')' +'' + operator2 + '' + num3;
    let latexSolution =  '(' + num1 +'' + operator1 + '' + num2 + ')' +'' + operator2 + '' + num3;
    return new PunktvorStrich(simpleTask, latexTask, simpleSolution , latexSolution);
  }
}

export default PunktvorStrich;