import {Command} from "../../command/Command";

export class ChangeStringCommand extends Command {

  private newValue: string;
  private target: string;

  constructor(target: string, newValue: string) {
    super();
    this.target = target;
    this.newValue = newValue;
  }

  protected DoExecute() {
    [this.target, this.newValue] = [this.newValue, this.target];
  }

  protected DoUnexecute() {
    [this.target, this.newValue] = [this.newValue, this.target];
  }
}
