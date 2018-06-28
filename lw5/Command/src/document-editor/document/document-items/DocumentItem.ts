export class DocumentItem {

  private parahraph: any;
  private image: any;

  constructor(parahraph: any, image: any) {
    this.parahraph = parahraph;
    this.image = image;
  }

  public GetImage(): any {
    return this.image;
  }

  public GetParagraph(): any {
    return this.parahraph;
  }
}
