export type HarmonicFuncType = {
  function: string;
  amplitude: number;
  frequency: number;
  phase: number;
}

export class HarmonicModel {

  private harmonicFunctionsStore: HarmonicFuncType[] = [];

  public getAllFunctions(): HarmonicFuncType[] {
    return this.harmonicFunctionsStore;
  }

  public addFunction(func: HarmonicFuncType) {
    this.harmonicFunctionsStore.push(func);
  }

  public deleteFunctionByIndex(index: number) {
    this.harmonicFunctionsStore.splice(index, 1);
  }
}
