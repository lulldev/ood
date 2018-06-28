import {ICommand} from "./ICommand";

export interface IHistory {
  CanUndo(): boolean;
  Undo();
  CanRedo(): boolean;
  Redo();
  AddAndExecuteCommand(command: ICommand);
  GetLastChanges(): object;
}
