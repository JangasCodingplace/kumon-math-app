# Developer Tutorial

## Adding New Generated Task

A new task needs to be added at two places:

- Create a new file in `src/components/Kumon/Tasks` with the name of
  the task and implement the task in that file
- Add the new created tasks to a profile in 
  `src/components/Kumon/Profiles.ts`

A tasks is always an instance of `GeneratedSimpleCalcTask`. A method
`generate` needs to be implemented which returns the instance Task 
object.

Here is an example:

```typescript
// src/components/Kumon/Tasks/SampleTask.tsx

import { GeneratedSimpleCalcTask } from "../GenericTask";


/*
  * A basic description about what task will be generated
  */
class SampleTask extends GeneratedSimpleCalcTask {
  public static generate(): SampleTask {
    // implement your task generator here and define variables
    // const simpleTask = ...
    // const latexTask = ...
    // const simpleSolution = ...
    // const latexSolution = ...
    return new SampleTask(simpleTask, latexTask, simpleSolution, latexSolution);
  }
}

export default SampleTask;
```

This code needs to be referenced in the profiles file:

```typescript
// src/components/Kumon/Profiles.ts

// other imports

import SampleTask from "./Tasks/SampleTask";

// ...

const profiles: Profile[] = [
  {
    name: "10-simple",
    taskTypes: [SampleTask]
  }
]
```
