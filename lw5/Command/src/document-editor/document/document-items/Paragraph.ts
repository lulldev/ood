import {History} from "../../command/History";
import {IParagraph} from "./IParagraph";

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
    // m_history.AddAndExecuteCommand(std::make_unique<CResizeImageCommand>(m_width, m_height, width, height));
    // this.history.AddAndExecuteCommand()
    console.log(text);
  }
}
