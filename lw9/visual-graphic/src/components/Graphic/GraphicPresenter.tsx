import { HarmonicModel } from '../../core/HarmonicModel';
import { IPresenter } from '../../core/Presenter';

export default class GraphicPresenter implements IPresenter {

  private view: any;
  private model: HarmonicModel = new HarmonicModel();

  public setView(view: any) {
    this.view = view;
  }

  public setModelData(data: any) {
    this.model.setFuncStore(data.harmonicList);
  }

  public getHarmonicSum(x: number) {
    return this.model.getHarmonicSum(x);
  }

  public drawGraph() {
    if (this.model.getAllFunctions().length > 0) {
      this.view.draw();
    } else {
      this.view.clearGraph();
    }
  }
}
