import {Command} from "../../command/Command";

class DeleteItemCommand extends Command {

  private items: any[] = []; // todo std::vector<DocumentItemPtr> &
  private item: any; // todo DocumentItemPtr
  private index: number;

  constructor(items: any[], index: number) {
    super();
    this.items = items;
    this.index = index;
  }

  protected DoExecute() {

    if (this.items.length === 0 || this.index > this.items.length) {
      throw new Error("Index out range");
    }

    this.item = this.items[this.index];
    this.items.splice(this.index, 1); // this.items.erase(m_items.begin() + m_index);
  }

  protected DoUnexecute() {

    if (this.index > this.items.length) {
      throw new Error("Index out range");
    }

    this.items.splice(this.index, 0, this.item);
  }
}
