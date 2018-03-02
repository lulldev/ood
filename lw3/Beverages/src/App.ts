import {IBeverage} from "./IBeverage";
import {Coffee, Latte} from "./Beverages";
import {Cinnamon, IceCubeType, Lemon, IceCubes, Syrop, SyrupType, ChocolateCrumbs, CoconutFlakes} from "./Condiments";

const MakeBeverage = {
  beverage: null,
  make: function (beverage: IBeverage) {
    this.beverage = beverage;
    return this;
  },
  addLemon: function (quantity: number) {
    const tmpBeverage = this.beverage;
    this.beverage = new Lemon(tmpBeverage, quantity);
    return this;
  },
  addCinnamon: function () {
    const tmpBeverage = this.beverage;
    this.beverage = new Cinnamon(tmpBeverage);
    return this;
  },
  addIceCubes: function (quantity: number, iceCubeType: IceCubeType) {
    const tmpBeverage = this.beverage;
    this.beverage = new IceCubes(tmpBeverage, quantity, iceCubeType);
    return this;
  },
  addSyrop: function (syropType: SyrupType) {
    const tmpBeverage = this.beverage;
    this.beverage = new Syrop(tmpBeverage, syropType);
    return this;
  },
  addChocolateCrumbs: function (mass: number) {
    const tmpBeverage = this.beverage;
    this.beverage = new ChocolateCrumbs(tmpBeverage, mass);
    return this;
  },
  addCoconutFlakes: function (mass: number) {
    const tmpBeverage = this.beverage;
    this.beverage = new CoconutFlakes(tmpBeverage, mass);
    return this;
  },
  get: function () {
    return this.beverage;
  }
};

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

