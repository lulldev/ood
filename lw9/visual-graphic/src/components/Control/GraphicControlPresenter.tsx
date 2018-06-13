import { model } from '../../core/HarmonicModel';

export default class GraphicControlPresenter {

  private view: any;

  public setView(view: any) {
    this.view = view;
  };

  public showAddForm() {
    this.view.showAddForm();
  }

  public showEditForm(index: number) {
    this.view.showEditForm(model.selectHarmonicByIndex(index));
  }

  public addHarmonicFunc(newFunc: any) {
    if (model.isFunctionValid(newFunc)) {
      model.addFunction(newFunc);
      this.view.hideAddForm();
      this.view.updateHarmonicList(model.getAllFunctions());
    } else {
      this.view.showError('Invalid harmonic func data');
    }
  }

  public deleteHarmonicFuncByIndex(index: number) {
    model.deleteFunctionByIndex(index);
    this.view.updateHarmonicList(model.getAllFunctions());
  }

  public editHarmonicFunc(editIndex: number, newFunc: any) {
    if (model.isFunctionValid(newFunc)) {
      model.deleteFunctionByIndex(editIndex);
      model.addFunction(newFunc);
      this.view.hideEditForm();
      this.view.updateHarmonicList(model.getAllFunctions());
    } else {
      this.view.showError('Invalid harmonic func data');
    }
  }

  public stringFuncArr() {
    return model.getStringFuncArr();
  }
}
