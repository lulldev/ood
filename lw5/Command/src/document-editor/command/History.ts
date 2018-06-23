import {IHistory} from "./IHistory";
import {ICommand} from "./ICommand";

export class History implements IHistory {

  private commands: any[] = []; // todo
  private nextCommandIndex: number = 0;

  public CanUndo(): boolean {
    return this.nextCommandIndex !== 0;
  }

  public Undo() {
    if (this.CanUndo()) {
      this.commands[this.nextCommandIndex - 1].Unexecute();
      --this.nextCommandIndex;
    }
  }

  public CanRedo(): boolean {
    return this.nextCommandIndex !== this.commands.length;
  }

  public Redo() {
    if (this.CanRedo()) {
      this.commands[this.nextCommandIndex].Execute();
      ++this.nextCommandIndex;
    }
  }

  public AddAndExecuteCommand(command: ICommand) {
    if (this.nextCommandIndex < this.commands.length) {
      command.Execute();
      ++this.nextCommandIndex;
      // m_commands.resize(m_nextCommandIndex);	// исключение выброшено не будет, т.к. размер <= текущему
      // m_commands.back() = move(command);
    }
    else {
      this.commands[this.commands.length + 1] = null;

      try {
        command.Execute();
        this.commands[this.commands.length] = command;
        ++this.nextCommandIndex;
      }
      catch (e)
      {
        this.commands.splice(this.commands.length, 1); // m_commands.pop_back();
        throw new Error();
      }

      if (this.commands.length > 10)
      {
        this.commands[0].Unexecute();
        this.commands.splice(0, 1);
        --this.nextCommandIndex;
      }
    }
  }

  public GetSize(): number {
    return this.commands.length;
  }
}
