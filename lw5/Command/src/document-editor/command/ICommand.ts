export interface ICommand {
  Execute();
  Unexecute();
  GetChanges(): object;
}
