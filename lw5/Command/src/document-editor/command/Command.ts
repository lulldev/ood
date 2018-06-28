import {ICommand} from "./ICommand";

export abstract class Command implements ICommand {

  private isExecuted: boolean = false;

  public Execute() {
    if (!this.isExecuted) {
      this.DoExecute();
      this.isExecuted = true;
    }
  }

  public Unexecute() {
    if (this.isExecuted)
    {
      this.DoUnexecute();
      this.isExecuted = false;
    }
  }

  public abstract GetChanges(): object;
  protected abstract DoExecute();
  protected abstract DoUnexecute();
}
