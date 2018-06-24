import {Command} from "../../command/Command";

export class InsertItemCommand extends Command {

  private items: any[] = []; // todo std::vector<DocumentItemPtr> &
  private item: any; // todo DocumentItemPtr
  private position: number;

  constructor(items: any[], item: any, position: number) {
    super();
    this.items = items;
    this.item = item;
    this.position = position;
  }

  protected DoExecute() {

    if (this.position < this.items.length || this.position > this.items.length) {
      this.items.splice(this.position, 0, this.item);
    }
    else {
      this.items.push(this.item);
    }
  }

  protected DoUnexecute() {

    if (this.position < this.items.length || this.position > this.items.length + 1) {
      this.items.splice(this.position, 1);
    }
    else {
      this.items.splice(this.items.length, 1);
    }
  }
}
