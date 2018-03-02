import {IBeverage} from "./IBeverage";
import {Coffee} from "./Beverages";
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

const beverage = MakeBeverage
  .make(coffee)
  .addLemon(2)
  .addLemon(3)
  .addCoconutFlakes(10)
  .get();

console.log(beverage.GetDescription());

