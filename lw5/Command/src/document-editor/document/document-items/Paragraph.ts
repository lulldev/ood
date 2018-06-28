import {History} from "../../command/History";
import {IParagraph} from "./IParagraph";
import {ChangeStringCommand} from "../document-commands/ChangeString";
import {IHistory} from "../../command/IHistory";

export class Paragraph implements IParagraph {

  private text: string;
  private history: IHistory;

  constructor(text: string, history: IHistory) {

    this.text = text;
    this.history = history;
  }

  public GetText(): string {
    return this.text;
  }

  public SetText(text: string) {
    const changeStringCommand = new ChangeStringCommand(this.text, text);
    this.history.AddAndExecuteCommand(changeStringCommand);
  }
}
