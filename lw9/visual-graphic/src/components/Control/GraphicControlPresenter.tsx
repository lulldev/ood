import { HarmonicModel } from '../../core/HarmonicModel';

export default class GraphicControlPresenter {

  private view: any;
  private model: any = new HarmonicModel();

  public setView(view: any) {
    this.view = view;
  }

  public setModelData(data: any) {
    this.model.setFuncStore(data.harmonicList);
  }

  public showAddForm() {
    this.view.showAddForm();
  }

  public showEditForm(index: number) {
    this.view.showEditForm(this.model.selectHarmonicByIndex(index));
  }

  public addHarmonicFunc(newFunc: any) {
    if (this.isFunctionValid(newFunc)) {
      this.model.addFunction(newFunc);
      this.view.hideAddForm();
      this.view.updateHarmonicList(this.model.getAllFunctions());
    } else {
      this.view.showError('Invalid harmonic func data');
    }
  }

  public deleteHarmonicFuncByIndex(index: number) {
    this.model.deleteFunctionByIndex(index);
    this.view.updateHarmonicList(this.model.getAllFunctions());
  }

  public editHarmonicFunc(editIndex: number, newFunc: any) {
    if (this.isFunctionValid(newFunc)) {
      this.model.deleteFunctionByIndex(editIndex);
      this.model.addFunction(newFunc);
      this.view.hideEditForm();
      this.view.updateHarmonicList(this.model.getAllFunctions());
    } else {
      this.view.showError('Invalid harmonic func data');
    }
  }

  public stringFuncArr() {
    return this.model.getStringFuncArr();
  }

  private isFunctionValid(newFuncObj: any): boolean {
    return (newFuncObj.hasOwnProperty('function') &&
      (newFuncObj.function === 'sin' || newFuncObj.function === 'cos')) &&
      (newFuncObj.hasOwnProperty('amplitude') && !isNaN(Number(newFuncObj.amplitude))) &&
      (newFuncObj.hasOwnProperty('frequency') && !isNaN(Number(newFuncObj.frequency))) &&
      (newFuncObj.hasOwnProperty('phase') && !isNaN(Number(newFuncObj.phase)));
  }
}
