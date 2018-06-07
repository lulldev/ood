import {
  HarmonicModel,
  HarmonicFunc
}
from './HarmonicModel';

export default class HarmonicViewModel {

  private harmonicModel: HarmonicModel = new HarmonicModel();
  private appContext: any;

  constructor(appContext: any) {
    this.appContext = appContext;
  }

  public setNewHarmonicFunction(func: HarmonicFunc) {
    this.harmonicModel.addFunction(func);
    this.appContext.setState({ harmonicFuncModel: this.appContext.state.harmonicFuncModel });
  }

  public allFuncsToString(): string[] {
    return this.harmonicModel.getAllFunctions().map((func: any) => {
      const frequencyString: string = func.frequency !== '0' ? func.frequency + '+' : '';
      const amplitudeString: string = func.amplitude !== '0' ? func.amplitude + '*' : '';
      const phaseString: string = func.phase !== '0' ? '*' + func.phase : '';
      return `${frequencyString}${amplitudeString}${func.function}(x${phaseString})`;
    });
  }

  public getBuildFuncs(): any[] {
    return this.harmonicModel.getAllFunctions().map((func: any) => {
      const harmonicType: any = func.function === 'sin' ? Math.sin : Math.cos;
      let frequency = Number(func.frequency);
      let amplitude = Number(func.amplitude);
      let phase = Number(func.phase);
      frequency = frequency !== 0 ? frequency : 1;
      amplitude = amplitude !== 0 ? amplitude : 1;
      phase = phase !== 0 ? phase : 0;

      return (x: any): any => {
        return amplitude * harmonicType(frequency * x + phase);
      };
    });
  }

  public deleteHarmonicFuncByIndex(index: number) {
    this.harmonicModel.deleteFunctionByIndex(index);
    this.appContext.setState({ harmonicFuncModel: this.appContext.state.harmonicFuncModel });
  }
}
