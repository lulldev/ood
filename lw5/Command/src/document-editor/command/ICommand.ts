// typedef std::unique_ptr<ICommand> ICommandPtr;

export interface ICommand {
  Execute();
  Unexecute();
}
