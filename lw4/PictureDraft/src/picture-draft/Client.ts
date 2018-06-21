export class Client {

  private name: string;

  constructor(name: string) {
    if (!name || name.length === 0) {
      throw Error('Name must be no-empty string');
    }
    this.name = name;
  }

  public GetName(): string {
    return this.name;
  }
}
