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
  private soldState: SoldState = new SoldState(this);
  private soldOutState: SoldOutState = new SoldOutState(this);
  private noQuarterState: NoQuarterState = new NoQuarterState(this);
  private hasQuarterState: HasQuarterState = new HasQuarterState(this);
  private state: IState;

  constructor(numBalls: number) {
    this.ballsCount = numBalls;
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
Machine is ${this.state.ToString()}
    `;
  }

  public GetBallCount(): number {
    return this.ballsCount;
  }

  public ReleaseBall(): void {
    if (this.ballsCount != 0) {
      console.log('A gumball comes rolling out the slot...\n');
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
