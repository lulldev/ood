export type HarmonicFunc = {
  function: string;
  amplitude: number;
  frequency: number;
  phase: number;
}

export class HarmonicModel {

  private harmonicFunctionsStore: HarmonicFunc[] = [];

  public getAllFunctions(): HarmonicFunc[] {
    return this.harmonicFunctionsStore;
  }

  public addFunction(func: HarmonicFunc) {
    this.harmonicFunctionsStore.push(func);
  }

  public deleteFunctionByIndex(index: number) {
    this.harmonicFunctionsStore.splice(index, 1);
  }
}
