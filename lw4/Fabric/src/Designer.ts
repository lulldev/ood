import { Shape } from "./Shape";
// import { PictureDraft } from './PictureDraft';

export interface IDesigner {
  CreateDraft(strm: string): void; // todo: PictureDraft
}

export class Designer implements IDesigner {

  public CreateDraft(strm: string): void { // todo: Shape
    // todo
  }
}

