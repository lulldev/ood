import { GumballMachine } from '../src/gumball-machine';

describe('GumballMachine', () => {

  let outputLog = [];
  const outputHookHelper = (data) => {
    if (data) {
      outputLog.push(data);
    }
  };

  it('Machine waiting after init with not zero balls', () => {
    outputLog = [];
    const gumballMachine: GumballMachine = new GumballMachine(10, outputHookHelper);

    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 10 gumballs\n' +
      'Machine is waiting for quarter');
    expect(outputLog.length).toEqual(0)
  });

  it('Machine sold out after init with zero balls', () => {
    outputLog = [];
    const gumballMachine: GumballMachine = new GumballMachine(0, outputHookHelper);
    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 0 gumballs\n' +
      'Machine is sold out');
    expect(outputLog.length).toEqual(0)
  });

  it('Machine is waiting for turn of crank after insert quarter', () => {
    outputLog = [];
    const gumballMachine: GumballMachine = new GumballMachine(10, outputHookHelper);

    gumballMachine.InsertQuarter();

    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 10 gumballs\n' +
      'Machine is waiting for turn of crank');
    expect(outputLog[0]).toEqual( 'You inserted a quarter' );
  });

  it('Machine is waiting for turn of crank after double insert quarter', () => {
    outputLog = [];
    const gumballMachine: GumballMachine = new GumballMachine(10, outputHookHelper);

    gumballMachine.InsertQuarter();
    gumballMachine.InsertQuarter();

    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 10 gumballs\n' +
      'Machine is waiting for turn of crank');

    expect(outputLog).toEqual([ 'You inserted a quarter', 'You cant insert another quarter' ]);
  });

  it('Machine is waiting for quarter after eject', () => {
    outputLog = [];
    const gumballMachine: GumballMachine = new GumballMachine(10, outputHookHelper);

    gumballMachine.InsertQuarter();
    gumballMachine.EjectQuarter();

    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 10 gumballs\n' +
      'Machine is waiting for quarter');
    expect(outputLog).toEqual([ 'You inserted a quarter', 'Quarter returned' ]);
  });

  it('Machine is waiting for quarter after double eject', () => {
    outputLog = [];
    const gumballMachine: GumballMachine = new GumballMachine(10, outputHookHelper);

    gumballMachine.InsertQuarter();
    gumballMachine.EjectQuarter();
    gumballMachine.EjectQuarter();

    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 10 gumballs\n' +
      'Machine is waiting for quarter');
    expect(outputLog).toEqual(    ['You inserted a quarter',
      'Quarter returned',
      'You havent inserted a quarter' ]
    );
  });

  it('Turn gumboll and machine must waiting for quarter', () => {
    outputLog = [];
    const gumballMachine: GumballMachine = new GumballMachine(2, outputHookHelper);

    gumballMachine.InsertQuarter();
    gumballMachine.TurnCrank();

    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 1 gumball\n' +
      'Machine is waiting for quarter');
    expect(outputLog).toEqual(    [ 'You inserted a quarter',
      'You turned...',
      'A gumball comes rolling out the slot...\n' ]
    );
  });

  it('Turn gumboll when balls is 1 and machine must waiting for quarter', () => {
    outputLog = [];
    const gumballMachine: GumballMachine = new GumballMachine(1, outputHookHelper);

    gumballMachine.InsertQuarter();
    gumballMachine.TurnCrank();

    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 0 gumballs\n' +
      'Machine is sold out');

    expect(outputLog).toEqual(
      [ 'You inserted a quarter',
        'You turned...',
        'A gumball comes rolling out the slot...\n',
        'Oops, out of gumballs' ]
    );
  });

  it('Machine doesnt get you another gumball when not sold', () => {
    outputLog = [];
    const gumballMachine: GumballMachine = new GumballMachine(1, outputHookHelper);

    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 1 gumball\n' +
      'Machine is waiting for quarter');

    gumballMachine.TurnCrank();

    expect(outputLog).toEqual([ 'You turned but theres no quarter', 'You need to pay first' ]);
  });

  it('Machine doesnt get you another gumball when no gumballs', () => {
    outputLog = [];
    const gumballMachine: GumballMachine = new GumballMachine(1, outputHookHelper);

    gumballMachine.InsertQuarter();
    gumballMachine.TurnCrank();
    gumballMachine.TurnCrank();

    expect(outputLog).toEqual(    [ 'You inserted a quarter',
      'You turned...',
      'A gumball comes rolling out the slot...\n',
      'Oops, out of gumballs',
      'You turned but theres no gumballs',
      'No gumball dispensed' ]
    );
  });

});

