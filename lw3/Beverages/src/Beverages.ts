import {IBeverage} from "./IBeverage";

export class Beverage implements IBeverage {

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

export class Coffee extends Beverage {

  constructor() {
    super('Coffee');
  }

  public GetCost(): number {
    return 60;
  }
}

export class Capuccino extends Beverage {

  constructor() {
    super('Capuccino');
  }

  public GetCost(): number {
    return 80;
  }
}

export type LatteType = 'Standart'|'Double';

export class Latte extends Beverage {

  private type;

  constructor(type: LatteType) {
    super('Latte');
    this.type = type;
  }

  public GetCost(): number {
    return this.type === 'Standart' ? 90 : 130;
  }

  public GetDescription(): string {
    return `${this.type} latte`;
  }
}

export class Tea extends Beverage {

  constructor() {
    super('Tea');
  }

  public GetCost(): number {
    return 30;
  }
}

export class Milkshake extends Beverage {

  constructor() {
    super('Milkshake');
  }

  public GetCost(): number {
    return 80;
  }
}
