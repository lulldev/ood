import {IBeverage} from "./IBeverage";

export type PortionType = 'Standart'|'Double';
export type TeaGradeType = 'Puer'|'Oolong'|'Green'|'Da Hong Pao';
export type MilkShakePortionType = 'Small'|'Middle'|'Big';

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

  private portionType;

  constructor(type: PortionType) {
    super('Capuccino');
    this.portionType = type;

  }

  public GetCost(): number {
    return this.portionType === 'Standart' ? 80 : 110;
  }

  public GetDescription(): string {
    return `${this.portionType} capuccino`;
  }
}

export class Latte extends Beverage {

  private portionType;

  constructor(portionType: PortionType) {
    super('Latte');
    this.portionType = portionType;
  }

  public GetCost(): number {
    return this.portionType === 'Standart' ? 90 : 130;
  }

  public GetDescription(): string {
    return `${this.portionType} latte`;
  }
}

export class Tea extends Beverage {

  private grade: TeaGradeType;

  constructor(grade) {
    super('Tea');
    this.grade = grade;
  }

  public GetCost(): number {
    return 30;
  }

  public GetDescription(): string {
    return `${this.grade} tea`;
  }
}

export class Milkshake extends Beverage {

  private portionType: MilkShakePortionType;

  constructor(portionType: MilkShakePortionType) {
    super('Milkshake');
    this.portionType = portionType;
  }

  public GetCost(): number {
    const milkPrice: object = {
      'Small': 50,
      'Middle': 60,
      'Big': 80,
    };
    return milkPrice[this.portionType];
  }

  public GetDescription(): string {
    return `${this.portionType} milkshake`;
  }
}
