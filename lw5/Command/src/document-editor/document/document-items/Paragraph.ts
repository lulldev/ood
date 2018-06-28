import {History} from "../../command/History";
import {IParagraph} from "./IParagraph";
import {ChangeStringCommand} from "../document-commands/ChangeString";

export class Paragraph implements IParagraph {

  private text: string;
  private history: History;

  constructor(text: string, history: History) {

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
