const readlineSync = require('readline-sync');

export type Command = (...args: any[]) => void;

export type MenuCommand = {
  name: string;
  description: string;
  command: Command;
};

export class Menu {

  private menuCommands: MenuCommand[] = [];

  public AddItem(name: string, description: string, command: Command) {
    this.menuCommands.push({name, description, command});
  }

  public Run() {
    this.ShowHelp();

    const promptCommands = {};
    this.menuCommands.forEach((menuCommand: MenuCommand) => {
      promptCommands[menuCommand.name] = menuCommand.command;
    });

    readlineSync.promptCLLoop(promptCommands);
  }

  public ShowHelp(): void {
    console.log('show help');
  }

  public Exit(): void {
    process.exit(0);
  }

}
