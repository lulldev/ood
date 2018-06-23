class Menu {

  private shortcut: string;
  private description: string;
  private command: any;
  private items: any[];

  public AddItem(shortcut: string, description: string, command: any) {
    this.items.push({shortcut, description, command});
  }

  public Run() {
    // ShowInstructions();

    // string command;
    // while ((cout << ">")
    // && getline(cin, command)
    // && ExecuteCommand(command))
    // {
    // }
  }

  public ShowInstructions() {
    // cout << "Commands list:\n";
    // for (auto & item : m_items)
    // {
    //   cout << "  " << item.shortcut << ": " << item.description << "\n";
    // }
  }

  public Exit() {

  }

  private ExecuteCommand(command: any): boolean {
    // istringstream iss(command);
    // string name;
    // iss >> name;
    //
    // m_exit = false;
    // auto it = boost::find_if(m_items, [&](const Item & item) {
    //   return item.shortcut == name;
    // });
    // if (it != m_items.end())
    // {
    //   it->command(iss);
    // }
    // else
    // {
    //   cout << "Unknown command\n";
    // }
    // return !m_exit;
  }
}
