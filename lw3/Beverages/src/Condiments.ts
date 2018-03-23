import {IBeverage} from "./IBeverage";

export class CondimentDecorator implements IBeverage {

  private beverage: IBeverage;

  constructor(beverage: IBeverage) {
    this.beverage = beverage;
  }

  public GetDescription(): string {
    return `${this.beverage.GetDescription()}, ${this.GetCondimentDescription()}`;
  }

  public GetCost(): number {
    return this.beverage.GetCost() + this.GetCondimentCost();
  }

  public GetCondimentDescription(): string {
    return '';
  }

  public GetCondimentCost(): number {
    return 0;
  }
}

export class Cinnamon extends CondimentDecorator {

  constructor(beverage: IBeverage) {
    super(beverage);
  }

  public GetCondimentCost(): number {
    return 20;
  }

  public GetCondimentDescription(): string {
    return 'Cinnamon';
  }
}

export class Lemon extends CondimentDecorator {

  private quantity: number;

  constructor(beverage: IBeverage, quantity: number = 1) {
    super(beverage);
    this.quantity = quantity;
  }

  public GetCondimentCost(): number {
    return 10 * this.quantity;
  }

  public GetCondimentDescription(): string {
    return `Lemon x ${this.quantity}`;
  }
}

export type IceCubeType = 'Dry'|'Water';

export class IceCubes extends CondimentDecorator {

  private quantity: number;
  private iceCubeType: IceCubeType;

  constructor(beverage: IBeverage, quantity: number = 1, iceCubeType: IceCubeType = 'Water') {
    super(beverage);
    this.quantity = quantity;
    this.iceCubeType = iceCubeType;
  }

  public GetCondimentCost(): number {
    return (this.iceCubeType === 'Dry' ? 10 : 5) * this.quantity;
  }

  public GetCondimentDescription(): string {
    return `${this.iceCubeType} ice cubes x ${this.quantity}`;
  }
}

export type SyrupType = 'Chocolate'|'Maple';

export class Syrop extends CondimentDecorator {

  private syropType: SyrupType;

  constructor(beverage: IBeverage, syropType: SyrupType) {
    super(beverage);
    this.syropType = syropType;
  }

  public GetCondimentCost(): number {
    return 15;
  }

  public GetCondimentDescription(): string {
    return `${this.syropType} syrop`;
  }
}

export class ChocolateCrumbs extends CondimentDecorator {

  private mass: number;

  constructor(beverage: IBeverage, mass: number) {
    super(beverage);
    this.mass = mass;
  }

  public GetCondimentCost(): number {
    return 2 * this.mass;
  }

  public GetCondimentDescription(): string {
    return `Chocolate crumbs ${this.mass} g.`;
  }
}

export class CoconutFlakes extends CondimentDecorator {

  private mass: number;

  constructor(beverage: IBeverage, mass: number) {
    super(beverage);
    this.mass = mass;
  }

  public GetCondimentCost(): number {
    return this.mass * 1;
  }

  public GetCondimentDescription(): string {
    return `Coconut flakes ${this.mass} g.`;
  }
}

export class Cream extends CondimentDecorator {

  private quantity: number;

  constructor(beverage: IBeverage, quantity: number = 1) {
    super(beverage);
    this.quantity = quantity;
  }

  public GetCondimentCost(): number {
    return this.quantity * 25;
  }

  public GetCondimentDescription(): string {
    return `Cream ${this.quantity}`;
  }
}

export class ChocolateSlice extends CondimentDecorator {

  private quantity: number;

  constructor(beverage: IBeverage, quantity: number = 1) {
    if (quantity < 1 || quantity > 5) {
      throw Error('Invalid quantity');
    }
    super(beverage);
    this.quantity = quantity;
  }

  public GetCondimentCost(): number {
    return this.quantity * 10;
  }

  public GetCondimentDescription(): string {
    return `Chocolate slices ${this.quantity}`;
  }
}

export type LiquorType = 'Walnut'|'Chocolate';

export class Liquor extends CondimentDecorator {

  private type: LiquorType;

  constructor(beverage: IBeverage, type: LiquorType) {
    super(beverage);
    this.type = type;
  }

  public GetCondimentCost(): number {
    return 50;
  }

  public GetCondimentDescription(): string {
    return `${this.type} liquor`;
  }
}



