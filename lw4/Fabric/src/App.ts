import { IBeverage } from "./IBeverage";
import {
  Capuccino,
  Coffee,
  Latte,
  Milkshake,
  Tea
} from "./Beverages";

import {
  Cinnamon,
  Lemon,
  IceCubes,
  Syrop,
  ChocolateCrumbs,
  CoconutFlakes,
  Cream,
  ChocolateSlice,
  Liquor,
} from "./Condiments";

// const MakeBeverage = {
//   beverage: null,
//   make: function (beverage: IBeverage) {
//     this.beverage = beverage;
//     return this;
//   },
//   addLemon: function (quantity: number) {
//     const tmpBeverage = this.beverage;
//     this.beverage = new Lemon(tmpBeverage, quantity);
//     return this;
//   },
//   addCinnamon: function () {
//     const tmpBeverage = this.beverage;
//     this.beverage = new Cinnamon(tmpBeverage);
//     return this;
//   },
//   addIceCubes: function (quantity: number, iceCubeType: IceCubeType) {
//     const tmpBeverage = this.beverage;
//     this.beverage = new IceCubes(tmpBeverage, quantity, iceCubeType);
//     return this;
//   },
//   addSyrop: function (syropType: SyrupType) {
//     const tmpBeverage = this.beverage;
//     this.beverage = new Syrop(tmpBeverage, syropType);
//     return this;
//   },
//   addChocolateCrumbs: function (mass: number) {
//     const tmpBeverage = this.beverage;
//     this.beverage = new ChocolateCrumbs(tmpBeverage, mass);
//     return this;
//   },
//   addCoconutFlakes: function (mass: number) {
//     const tmpBeverage = this.beverage;
//     this.beverage = new CoconutFlakes(tmpBeverage, mass);
//     return this;
//   },
//   get: function () {
//     return this.beverage;
//   }
// };

/*
const coffee = new Coffee();
const beverageCoffee = MakeBeverage
  .make(coffee)
  .addCoconutFlakes(10)
  .get();

console.log(beverageCoffee.GetDescription());

const latte = new Latte('Standart');
const beverageLatte = MakeBeverage
  .make(latte)
  .addChocolateCrumbs(5)
  .addSyrop('Chocolate')
  .get();

console.log(beverageLatte.GetDescription(), beverageLatte.GetCost());


const doubleLatte = new Latte('Double');

const beverageDoubleLatte = MakeBeverage
  .make(doubleLatte)
  .addChocolateCrumbs(5)
  .addCoconutFlakes(5)
  .get();

console.log(beverageDoubleLatte.GetDescription(), beverageDoubleLatte.GetCost());


const capuccino = new Capuccino('Standart');

const beverageCapuccino = MakeBeverage
  .make(capuccino)
  .addCoconutFlakes(5)
  .get();

console.log(beverageCapuccino.GetDescription(), beverageCapuccino.GetCost());


const doubleCapuccino = new Capuccino('Double');

const beverageDoubleCapuccino = MakeBeverage
  .make(doubleCapuccino)
  .addSyrop('Chocolate')
  .addIceCubes(5)
  .get();

console.log(beverageDoubleCapuccino.GetDescription(), beverageDoubleCapuccino.GetCost());

const puerTea = new Tea('Puer');
const beverageTea = MakeBeverage
  .make(puerTea)
  .addLemon(2)
  .get();

console.log(beverageTea.GetDescription(), beverageTea.GetCost());


const milkshake = new Milkshake('Small');
const beverageMilkshake = MakeBeverage
  .make(milkshake)
  .addIceCubes(1)
  .addCoconutFlakes(5)
  .get();

console.log(beverageMilkshake.GetDescription(), beverageMilkshake.GetCost());


const bigMilkshake = new Milkshake('Big');
const beverageBigMilkshake = MakeBeverage
  .make(bigMilkshake)
  .addCoconutFlakes(5)
  .addChocolateCrumbs(3)
  .get();

console.log(beverageBigMilkshake.GetDescription(), beverageBigMilkshake.GetCost());
*/


const MakeBeverage = {
  beverage: null,
  setUp: function (starterBeverage) {
    this.beverage = starterBeverage;
    return this;
  },
  decorate: function (decorator, ...args) {
    this.beverage = new decorator(this.beverage, ...args);
    return this;
  },
  result: function () {
    return `${this.beverage.GetDescription()}, ${this.beverage.GetCost()} rub.`;

  }
};

const milkShakeWithIceCubes = MakeBeverage
  .setUp(new Milkshake("Small"))
  .decorate(IceCubes, 5)
  .result();

const coffeWithSyropAndCoconut = MakeBeverage
  .setUp(new Coffee())
  .decorate(Syrop, 'Chocolate')
  .decorate(CoconutFlakes, 5)
  .result();

const coffeWithCreamAndChocolateSlices = MakeBeverage
  .setUp(new Coffee())
  .decorate(Cream, 5)
  .decorate(ChocolateSlice, 2)
  .result();

const latteWithLiquorAndChocolateCrumbs = MakeBeverage
  .setUp(new Coffee())
  .decorate(Liquor, 'Walnut')
  .decorate(ChocolateSlice, 5)
  .result();

console.log(milkShakeWithIceCubes);
console.log(coffeWithSyropAndCoconut);
console.log(coffeWithCreamAndChocolateSlices);
console.log(latteWithLiquorAndChocolateCrumbs);
