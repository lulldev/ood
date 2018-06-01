import { IState } from './state';
import { IGumballMachine } from './gumball-machine';

export class SoldState implements IState {

  private gumballMachine: IGumballMachine;
  private output: any;

  constructor(gumballMachine: IGumballMachine, output: any) {
    this.gumballMachine = gumballMachine;
    this.output = output;
  }

  InsertQuarter(): void {
    this.output('Please wait, we are already giving you a gumball');
  }

  EjectQuarter(): void {
    this.output('Sorry you already turned the crank');
  }

  TurnCrank(): void {
    this.output('Turning twice doesnt get you another gumball');
  }

  Dispense(): void {
    this.gumballMachine.ReleaseBall();
    if (this.gumballMachine.GetBallCount() == 0) {
      this.output('Oops, out of gumballs');
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
  private output: any;

  constructor(gumballMachine: IGumballMachine, output: any) {
    this.gumballMachine = gumballMachine;
    this.output = output;
  }

  InsertQuarter(): void {
    this.output('You cant insert a quarter, the machine is sold out');
  }

  EjectQuarter(): void {
    this.output('You cant eject, you havent inserted a quarter yet');
  }

  TurnCrank(): void {
    this.output('You turned but theres no gumballs');
  }

  Dispense(): void {
    this.output('No gumball dispensed');
  }

  ToString(): string {
    return "sold out";
  }
}

export class HasQuarterState implements IState {

  private gumballMachine: IGumballMachine;
  private output: any;

  constructor(gumballMachine: IGumballMachine, output: any) {
    this.gumballMachine = gumballMachine;
    this.output = output;
  }

  InsertQuarter(): void {
    this.output('You cant insert another quarter');
  }

  EjectQuarter(): void {
    this.output('Quarter returned');
    this.gumballMachine.SetNoQuarterState();
  }

  TurnCrank(): void {
    this.output('You turned...');
    this.gumballMachine.SetSoldState();
  }

  Dispense(): void {
    this.output('No gumball dispensed');
  }

  ToString(): string {
    return "waiting for turn of crank";
  }
}

export class NoQuarterState implements IState {

  private gumballMachine: IGumballMachine;
  private output: any;

  constructor(gumballMachine: IGumballMachine, output: any) {
    this.gumballMachine = gumballMachine;
    this.output = output;
  }

  InsertQuarter(): void {
    this.output('You inserted a quarter');
    this.gumballMachine.SetHasQuarterState();
  }

  EjectQuarter(): void {
    this.output('You havent inserted a quarter');
  }

  TurnCrank(): void {
    this.output('You turned but theres no quarter');
  }

  Dispense(): void {
    this.output('You need to pay first');
  }

  ToString(): string {
    return "waiting for quarter";
  }
}
