import { IState } from './state';
import { IGumballMachine } from './gumball-machine';

export class SoldState implements IState {

  private gumballMachine: IGumballMachine;

  constructor(gumballMachine: IGumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  InsertQuarter(): void {
    console.log('Please wait, we are already giving you a gumball');
  }

  EjectQuarter(): void {
    console.log('Sorry you already turned the crank');
  }

  TurnCrank(): void {
    console.log('Turning twice doesnt get you another gumball');
  }

  Dispense(): void {
    this.gumballMachine.ReleaseBall();
    if (this.gumballMachine.GetBallCount() == 0) {
      console.log('Oops, out of gumballs');
      this.gumballMachine.SetSoldOutState();
    }
    else {
      this.gumballMachine.SetNoQuarterState();
    }
  }

  ToString(): string {
    return "delivering a gumball";
  }
}

export class SoldOutState implements IState {

  private gumballMachine: IGumballMachine;

  constructor(gumballMachine: IGumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  InsertQuarter(): void {
    console.log('You cant insert a quarter, the machine is sold out');
  }

  EjectQuarter(): void {
    console.log('You cant eject, you havent inserted a quarter yet');
  }

  TurnCrank(): void {
    console.log('You turned but theres no gumballs');
  }

  Dispense(): void {
    console.log('No gumball dispensed');
  }

  ToString(): string {
    return "sold out";
  }
}

export class HasQuarterState implements IState {

  private gumballMachine: IGumballMachine;

  constructor(gumballMachine: IGumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  InsertQuarter(): void {
    console.log('You cant insert another quarter');
  }

  EjectQuarter(): void {
    console.log('Quarter returned');
    this.gumballMachine.SetNoQuarterState();
  }

  TurnCrank(): void {
    console.log('You turned...');
    this.gumballMachine.SetSoldState();
  }

  Dispense(): void {
    console.log('No gumball dispensed');
  }

  ToString(): string {
    return "waiting for turn of crank";
  }
}

export class NoQuarterState implements IState {

  private gumballMachine: IGumballMachine;

  constructor(gumballMachine: IGumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  InsertQuarter(): void {
    console.log('You inserted a quarter');
    this.gumballMachine.SetHasQuarterState();
  }

  EjectQuarter(): void {
    console.log('You havent inserted a quarter');
  }

  TurnCrank(): void {
    console.log('You turned but theres no quarter');
  }

  Dispense(): void {
    console.log('You need to pay first');
  }

  ToString(): string {
    return "waiting for quarter";
  }
}
