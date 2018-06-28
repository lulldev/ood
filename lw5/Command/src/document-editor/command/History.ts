import {IHistory} from "./IHistory";
import {ICommand} from "./ICommand";

export class History implements IHistory {

  private undoStack: any[] = [];
  private redoStack: any[] = [];

  public CanUndo(): boolean {
    return this.undoStack.length !== 0;
  }

  public Undo() {

    if (!this.CanUndo()) {
      throw new Error("can't undo");
    }
    const command = this.undoStack[this.undoStack.length - 1];
    this.undoStack.splice(this.undoStack.length - 1, 1);
    command.Unexecute();
    this.redoStack.push(command);
  }

  public CanRedo(): boolean {
    return this.redoStack.length !== 0;
  }

  public Redo() {
    if (!this.CanRedo()) {
      throw new Error("can't redo");
    }

    const command = this.redoStack[this.redoStack.length];
    this.redoStack.splice(this.undoStack.length - 1, 1);
    command.Execute();
    this.undoStack.push(command);
  }

  public AddAndExecuteCommand(command: ICommand) {
    command.Execute();
    if (this.undoStack.length === 10) {
      this.undoStack.splice(0, 1);
    }
    this.undoStack.push(command);
    this.redoStack = [];
  }
}
