import {Command} from "../../command/Command";

export class ChangeStringCommand extends Command {

  private newValue: string;
  private target: string;
  private field: string;

  constructor(target: string, newValue: string, field: string) {
    super();
    this.target = target;
    this.newValue = newValue;
    this.field = field;
  }

  public GetChanges(): object {
    return { field: this.field, actual: this.target};
  }

  protected DoExecute() {
    [this.target, this.newValue] = [this.newValue, this.target];
  }

  protected DoUnexecute() {
    [this.target, this.newValue] = [this.newValue, this.target];
  }
}
