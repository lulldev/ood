import {
  HarmonicModel,
  HarmonicFuncType
} from '../../core/HarmonicModel';

export default class GraphicControlPresenter {

  private harmonicModel: HarmonicModel = new HarmonicModel();
  private appContext: any;

  constructor(appContext: any) {
    this.appContext = appContext;
  }

  public setNewHarmonicFunction(func: HarmonicFuncType) {
    func.amplitude = Number(func.amplitude);
    func.frequency = Number(func.frequency);
    func.phase = Number(func.phase);
    this.harmonicModel.addFunction(func);
    this.appContext.setState({ harmonicFuncModel: this.appContext.state.harmonicFuncModel });
  }

  public allFuncsToString(): string[] {
    return this.harmonicModel.getAllFunctions().map((func: any) => {
      const amplitudeString: string = func.amplitude !== 0 ? func.amplitude + '*' : '';
      const frequencyString: string = func.frequency !== 0 ? '*' + func.frequency : '';
      const phaseString: string = func.phase !== 0 ? '+' + func.phase : '';
      return `${amplitudeString}${func.function}(x${frequencyString}${phaseString})`;
    });
  }

  public calculateHarmonicSum(x: number): number {
    let harmonicSum = 0;
    this.getBuildFuncs().forEach((func) => {
      harmonicSum += func(x);
    });
    return harmonicSum;
  }

  public deleteHarmonicFuncByIndex(index: number) {
    this.harmonicModel.deleteFunctionByIndex(index);
    this.appContext.setState({ harmonicFuncModel: this.appContext.state.harmonicFuncModel });
  }

  public isFunctionValid(newFuncObj: any): boolean {
    return (newFuncObj.hasOwnProperty('function') &&
      (newFuncObj.function === 'sin' || newFuncObj.function === 'cos')) &&
      (newFuncObj.hasOwnProperty('amplitude') && !isNaN(Number(newFuncObj.amplitude))) &&
      (newFuncObj.hasOwnProperty('frequency') && !isNaN(Number(newFuncObj.frequency))) &&
      (newFuncObj.hasOwnProperty('phase') && !isNaN(Number(newFuncObj.phase)));
  }

  public selectByIndex(index: number): HarmonicFuncType {
    return this.harmonicModel.getAllFunctions()[index];
  }

  private getBuildFuncs(): any[] {
    return this.harmonicModel.getAllFunctions().map((func: any) => {
      const harmonicType: any = func.function === 'sin' ? Math.sin : Math.cos;
      const amplitude = func.amplitude !== 0 ? func.amplitude : 1;
      const frequency = func.frequency !== 0 ? func.frequency : 1;
      const phase = func.phase !== 0 ? func.phase : 0;

      return (x: any): any => {
        return amplitude * harmonicType(frequency * x + phase);
      };
    });
  }
}
