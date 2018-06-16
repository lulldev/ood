export type HarmonicFuncType = {
  function: string;
  amplitude: number;
  frequency: number;
  phase: number;
}

export class HarmonicModel {

  private harmonicFunctionsStore: HarmonicFuncType[] = [];

  public setFuncStore(funcStore: HarmonicFuncType[]) {
    this.harmonicFunctionsStore = funcStore;
  }

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

  public getStringFuncArr(): string[] {
    return this.getAllFunctions().map((func: any) => {
      const amplitudeString: string = func.amplitude + '*';
      const frequencyString: string = '*' + func.frequency;
      const phaseString: string = Number(func.phase) !== 0 ? '+' + func.phase : '';
      return `${amplitudeString}${func.function}(x${frequencyString}${phaseString})`;
    });
  }

  public getBuildFuncs(): any[] {
    return this.getAllFunctions().map((func: any) => {
      const harmonicType: any = func.function === 'sin' ? Math.sin : Math.cos;
      const amplitude = Number(func.amplitude) !== 0 ? Number(func.amplitude) : 0;
      const frequency = Number(func.frequency) !== 0 ? Number(func.frequency) : 0;
      const phase = Number(func.phase) !== 0 ? Number(func.phase) : 0;

      return (x: any): any => {
        return amplitude * harmonicType(frequency * x + phase);
      };
    });
  }

  public getHarmonicSum(x: number): number {
    let harmonicSum = 0;
    this.getBuildFuncs().forEach((func) => {
      harmonicSum += func(x);
    });
    return harmonicSum;
  }
}
