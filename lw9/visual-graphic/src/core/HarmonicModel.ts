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

  public selectHarmonicByIndex(index: number): HarmonicFuncType {
    return this.getAllFunctions()[index];
  }

  public isFunctionValid(newFuncObj: any): boolean {
    console.log(newFuncObj);
    return (newFuncObj.hasOwnProperty('function') &&
      (newFuncObj.function === 'sin' || newFuncObj.function === 'cos')) &&
      (newFuncObj.hasOwnProperty('amplitude') && !isNaN(Number(newFuncObj.amplitude))) &&
      (newFuncObj.hasOwnProperty('frequency') && !isNaN(Number(newFuncObj.frequency))) &&
      (newFuncObj.hasOwnProperty('phase') && !isNaN(Number(newFuncObj.phase)));
  }

  public getStringFuncArr(): any {
    return this.getAllFunctions().map((func: any) => {
      const amplitudeString: string = func.amplitude !== 0 ? func.amplitude + '*' : '';
      const frequencyString: string = func.frequency !== 0 ? '*' + func.frequency : '';
      const phaseString: string = func.phase !== 0 ? '+' + func.phase : '';
      return `${amplitudeString}${func.function}(x${frequencyString}${phaseString})`;
    });
  }
}

export const model = new HarmonicModel();
