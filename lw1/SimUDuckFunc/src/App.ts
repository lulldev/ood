type FlyBehavior = () => void;
type DanceBehavior = () => void;
type QuackBehavior = () => void;

const anything = () => { console.log('Do anything!'); };
const quack: QuackBehavior = () => { console.log('Quack Quack!'); };
const squeek: FlyBehavior = () => { console.log('Squeek'); };
const danceWaltz: DanceBehavior = () => { console.log('I\'m dancing waltz!'); };
const danceMinuet: DanceBehavior = () => { console.log('I\'m dancing minuet!'); };
const notDance: DanceBehavior = () => { console.log('I\'m not dance!'); };

const flyWithWingsBehavior = () => {
  let counter = 0;

  return () => {
    counter++;
    console.log(`I am flying with wings. Flight counter is: ${counter}`);
  };
};

const flyWithRocketEngineBehavior = () => {
  let counter = 0;

  return () => {
    counter++;
    console.log(`I am flying with rocket engine. Flight counter is: ${counter}`);
  };
};

abstract class Duck {

  private flyBehavior: FlyBehavior;
  private quackBehavior: QuackBehavior;
  private danceBehavior: DanceBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior, danceBehavior: DanceBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
    this.danceBehavior = danceBehavior;
  }

  public SetFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  public Quack(): void {
    this.quackBehavior();
  }

  public Swim(): void {
    console.log('I am swiming!');
  }

  public Fly(): void {
    this.flyBehavior();
  }

  public Dance(): void {
    this.danceBehavior();
  }

  public abstract Display(): void;
}

class MallardDuck extends Duck {

  constructor() {
    super(flyWithWingsBehavior(), quack, danceWaltz);
  }

  public Display(): void {
    console.log('I\'m mallard duck!');
  }
}

class RedheadDuck extends Duck {

  constructor() {
    super(flyWithWingsBehavior(), quack, danceMinuet);
  }

  public Display(): void {
    console.log('I\'m readhead duck!');
  }
}

class DeckoyDuck extends Duck {

  constructor() {
    super(anything, anything, notDance);
  }

  public Display(): void {
    console.log('I\'m deckoy duck!');
  }
}

class RubberDuck extends Duck {

  constructor() {
    super(anything, squeek, notDance);
  }

  public Display(): void {
    console.log('I\'m rubber duck!');
  }
}

class ModelDuck extends Duck {

  constructor() {
    super(anything, quack, notDance);
  }

  public Display(): void {
    console.log('I\'m rubber duck!');
  }
}

const drawDuck = (duck: Duck) => {
  duck.Display();
};

const playWithDuck = (duck: Duck) => {
  drawDuck(duck);
  duck.Quack();
  duck.Fly();
  duck.Dance();
};

const mallardDuck = new MallardDuck();

playWithDuck(mallardDuck);
playWithDuck(mallardDuck);

mallardDuck.SetFlyBehavior(flyWithRocketEngineBehavior());
playWithDuck(mallardDuck);

const redheadDuck = new RedheadDuck();
playWithDuck(redheadDuck);

const rubberDuck = new RubberDuck();
playWithDuck(rubberDuck);

const deckoyDuck = new DeckoyDuck();
playWithDuck(deckoyDuck);

const modelDuck = new ModelDuck();
playWithDuck(modelDuck);

modelDuck.SetFlyBehavior(flyWithWingsBehavior());
playWithDuck(modelDuck);
modelDuck.SetFlyBehavior(flyWithWingsBehavior());
playWithDuck(modelDuck);
