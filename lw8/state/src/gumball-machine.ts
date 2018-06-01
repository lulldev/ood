import { IState } from './state';
import {
  SoldState,
  SoldOutState,
  HasQuarterState,
  NoQuarterState,
} from './gumball-states';

export interface IGumballMachine {
  ReleaseBall(): void;
  GetBallCount(): number;
  SetSoldOutState(): void;
  SetNoQuarterState(): void;
  SetSoldState(): void;
  SetHasQuarterState(): void;
}

export class GumballMachine implements IGumballMachine {

  private ballsCount: number = 0;
  private soldState: SoldState;
  private soldOutState: SoldOutState;
  private noQuarterState: NoQuarterState;
  private hasQuarterState: HasQuarterState;
  private state: IState;
  private output: any;

  constructor(numBalls: number, output: any) {
    this.ballsCount = numBalls;
    this.output = output;
    this.soldState = new SoldState(this, this.output);
    this.soldOutState = new SoldOutState(this, this.output);
    this.noQuarterState = new NoQuarterState(this, this.output);
    this.hasQuarterState = new HasQuarterState(this, this.output);

    this.state = this.soldOutState;
    if (this.ballsCount > 0) {
      this.state = this.noQuarterState;
    }
  }

  public EjectQuarter(): void {
    this.state.EjectQuarter();
  }

  public InsertQuarter(): void {
    this.state.InsertQuarter();
  }

  public TurnCrank(): void {
    this.state.TurnCrank();
    this.state.Dispense();
  }

  public ToString(): string {
    return `Mighty Gumball, Inc.
Inventory: ${this.ballsCount} ${'gumball' + (this.ballsCount !== 1 ? 's' : '')}
Machine is ${this.state.ToString()}`;
  }

  public GetBallCount(): number {
    return this.ballsCount;
  }

  public ReleaseBall(): void {
    if (this.ballsCount != 0) {
      this.output('A gumball comes rolling out the slot...\n');
      --this.ballsCount;
    }
  }

  public SetSoldOutState(): void {
    this.state = this.soldOutState;
  }

  public SetNoQuarterState(): void {
    this.state = this.noQuarterState;
  }

  public SetSoldState(): void {
    this.state = this.soldState;
  }

  public SetHasQuarterState(): void {
    this.state = this.hasQuarterState;
  }
}
