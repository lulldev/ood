import { GumballMachine } from '../src/gumball-machine';

describe('GumballMachine', () => {

  it('Machine waiting after init with not zero balls', () => {
    const gumballMachine: GumballMachine = new GumballMachine(10);
    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 10 gumballs\n' +
      'Machine is waiting for quarter');
  });

  it('Machine sold out after init with zero balls', () => {
    const gumballMachine: GumballMachine = new GumballMachine(0);
    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 0 gumballs\n' +
      'Machine is sold out');
  });

  it('Machine is waiting for turn of crank after insert quarter', () => {
    const gumballMachine: GumballMachine = new GumballMachine(10);
    gumballMachine.InsertQuarter();
    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 10 gumballs\n' +
      'Machine is waiting for turn of crank');
  });

  it('Machine is waiting for turn of crank after double insert quarter', () => {
    const gumballMachine: GumballMachine = new GumballMachine(10);
    gumballMachine.InsertQuarter();
    gumballMachine.InsertQuarter();
    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 10 gumballs\n' +
      'Machine is waiting for turn of crank');
  });

  it('Machine is waiting for quarter after eject', () => {
    const gumballMachine: GumballMachine = new GumballMachine(10);
    gumballMachine.InsertQuarter();
    gumballMachine.EjectQuarter();
    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 10 gumballs\n' +
      'Machine is waiting for quarter');
  });

  it('Machine is waiting for quarter after double eject', () => {
    const gumballMachine: GumballMachine = new GumballMachine(10);
    gumballMachine.InsertQuarter();
    gumballMachine.EjectQuarter();
    gumballMachine.EjectQuarter();
    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 10 gumballs\n' +
      'Machine is waiting for quarter');
  });

  it('Turn gumboll and machine must waiting for quarter', () => {
    const gumballMachine: GumballMachine = new GumballMachine(2);
    gumballMachine.InsertQuarter();
    gumballMachine.TurnCrank();
    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 1 gumball\n' +
      'Machine is waiting for quarter');

  });

  it('Turn gumboll when balls is 1 and machine must waiting for quarter', () => {
    const gumballMachine: GumballMachine = new GumballMachine(1);
    gumballMachine.InsertQuarter();

    gumballMachine.TurnCrank();
    expect(gumballMachine.ToString()).toEqual('Mighty Gumball, Inc.\n' +
      'Inventory: 0 gumballs\n' +
      'Machine is sold out');
  });



});

