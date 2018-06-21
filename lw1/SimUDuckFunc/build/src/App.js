"use strict";
const anything = () => { console.log('Do anything!'); };
const quack = () => { console.log('Quack Quack!'); };
const squeek = () => { console.log('Squeek'); };
const danceWaltz = () => { console.log('I\'m dancing waltz!'); };
const danceMinuet = () => { console.log('I\'m dancing minuet!'); };
const notDance = () => { console.log('I\'m not dance!'); };
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
class Duck {
    constructor(flyBehavior, quackBehavior, danceBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
        this.danceBehavior = danceBehavior;
    }
    SetFlyBehavior(flyBehavior) {
        this.flyBehavior = flyBehavior;
    }
    Quack() {
        this.quackBehavior();
    }
    Swim() {
        console.log('I am swiming!');
    }
    Fly() {
        this.flyBehavior();
    }
    Dance() {
        this.danceBehavior();
    }
}
class MallardDuck extends Duck {
    constructor() {
        super(flyWithWingsBehavior(), quack, danceWaltz);
    }
    Display() {
        console.log('I\'m mallard duck!');
    }
}
class RedheadDuck extends Duck {
    constructor() {
        super(flyWithWingsBehavior(), quack, danceMinuet);
    }
    Display() {
        console.log('I\'m readhead duck!');
    }
}
class DeckoyDuck extends Duck {
    constructor() {
        super(anything, anything, notDance);
    }
    Display() {
        console.log('I\'m deckoy duck!');
    }
}
class RubberDuck extends Duck {
    constructor() {
        super(anything, squeek, notDance);
    }
    Display() {
        console.log('I\'m rubber duck!');
    }
}
class ModelDuck extends Duck {
    constructor() {
        super(anything, quack, notDance);
    }
    Display() {
        console.log('I\'m rubber duck!');
    }
}
const drawDuck = (duck) => {
    duck.Display();
};
const playWithDuck = (duck) => {
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
//# sourceMappingURL=App.js.map