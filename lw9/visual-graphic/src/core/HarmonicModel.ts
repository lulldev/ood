export default class HarmonicModel {

  private harmonicFunctionsStore: any[] = [];

  public getAllFunctions(): any[] {
    return this.harmonicFunctionsStore;
  }

  public addFunction(func: any) {
    this.harmonicFunctionsStore.push(func);
  }

  public deleteFunctionByIndex(index: number) {
    this.harmonicFunctionsStore.splice(index, 1);
  }
}
