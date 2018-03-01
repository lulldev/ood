import {IBeverage} from "./IBeverage";

class Beverage implements IBeverage {

  private description: string;

  constructor(description: string) {
    this.description = description;
  }

  public GetDescription(): string {
    return this.description;
  }

  public GetCost(): number {
    return 0;
  }
}

class Coffee extends Beverage {

  constructor() {
    super('Coffee');
  }

  public GetCost(): number {
    return 60;
  }
}

class Capuccino extends Beverage {

  constructor() {
    super('Capuccino');
  }

  public GetCost(): number {
    return 80;
  }
}

class Latte extends Beverage {

  constructor() {
    super('Latte');
  }

  public GetCost(): number {
    return 90;
  }
}

class Tea extends Beverage {

  constructor() {
    super('Tea');
  }

  public GetCost(): number {
    return 30;
  }
}

class Milkshake extends Beverage {

  constructor() {
    super('Milkshake');
  }

  public GetCost(): number {
    return 80;
  }
}
