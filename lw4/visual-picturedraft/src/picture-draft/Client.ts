export class Client {

  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public GetName(): string {
    return this.name;
  }
}

