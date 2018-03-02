import {IBeverage} from "./IBeverage";
import {Coffee} from "./Beverages";
import {Lemon} from "./Condiments";

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
  get: function () {
    return this.beverage;
  }
};

const coffee = new Coffee();

const beverage = MakeBeverage
  .make(coffee)
  .addLemon(2)
  .addLemon(3)
  .get();

console.log(beverage.GetDescription());

