import { GumballMachine } from './gumball-machine';

const gumballMachine: GumballMachine = new GumballMachine(10, console.log);
console.log(gumballMachine.ToString());

gumballMachine.InsertQuarter();
gumballMachine.TurnCrank();

console.log(gumballMachine.ToString());

gumballMachine.InsertQuarter();
gumballMachine.EjectQuarter();
gumballMachine.TurnCrank();

console.log(gumballMachine.ToString());

gumballMachine.InsertQuarter();
gumballMachine.TurnCrank();
gumballMachine.InsertQuarter();
gumballMachine.TurnCrank();
gumballMachine.EjectQuarter();

console.log(gumballMachine.ToString());

gumballMachine.InsertQuarter();
gumballMachine.InsertQuarter();
gumballMachine.TurnCrank();
gumballMachine.InsertQuarter();
gumballMachine.TurnCrank();
gumballMachine.InsertQuarter();
gumballMachine.TurnCrank();

console.log(gumballMachine.ToString());
