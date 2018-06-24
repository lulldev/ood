export class DocumentItem {

  // todo types
  private parahraph: any;
  private image: any;

  constructor(parahraph: any, image: any) {
    this.parahraph = parahraph;
    this.image = image;
  }

  public GetImage(): any { //IImageConstPtr
    return this.image;
  }

  public GetParagraph(): any { // IParagraphConstPtr
    return this.parahraph;
  }
}
