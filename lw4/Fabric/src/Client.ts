const randomstring = require('randomstring');

export class Client {

  private id: number;
  private name: string;

  constructor(name: string) {
    this.id = randomstring.generate();
    this.name = name;
  }

  public GetName(): string {
    return this.name;
  }
}

