class Editor {

  private document: any; // todo
  private menu: any; // todo

  constructor() {
    // this.menu.AddItem("help", "Help", [this](istream&) { m_menu.ShowInstructions(); });
    // this.menu.AddItem("exit", "Exit", [this](istream&) { m_menu.Exit(); });
    this.AddMenuItem("setTitle", "Change title. Args: <new title>", &CEditor::SetTitle);
    this.AddMenuItem("insertParagraph", "Add paragraph at position. Args: <position>|end <text>", &CEditor::AddParagraph);
    this.AddMenuItem("insertImage", "Add image at positions. Args: <position>|end <width> <height> <path>", &CEditor::AddImage);
    this.AddMenuItem("deleteItem", "Delete item at position. Args: <position>", &CEditor::DeleteItem);
    this.AddMenuItem("replaceText", "Replace text at position. Args: <position> <text>", &CEditor::ReplaceText);
    this.AddMenuItem("resizeImage", "Resize image at position. Args: <position> <width> <height>", &CEditor::ResizeImage);
    this.AddMenuItem("save", "Save html document to path. Args: <path>", &CEditor::Save);
    this.AddMenuItem("list", "Show document", &CEditor::List);
    this.AddMenuItem("undo", "Undo command", &CEditor::Undo);
    this.AddMenuItem("redo", "Redo undone command", &CEditor::Redo);
  }

  public Init(): void {
    // this.menu.Run();
  }

  private AddMenuItem(shortcut: string, description: string, handler: any): void {
    this.menu.AddItem(shortcut, description, bind(handler, this, _1));
  }

  private SetTitle(title: string) {
    this.menu.SetTitle(ReadLine(in));
  }

  private AddParagraph(input: string) {
    try
    {
      boost::optional<size_t> position = ReadPosition(in);

      string text = ReadLine(in);

      this.document.InsertParagraph(text, position);
    }
    catch (exception & e)
    {
      cout << e.what() << endl;
    }
  }

  private AddImage(input: string) {
    try
    {
      boost::optional<size_t> position = ReadPosition(in);
      unsigned width = ReadUnsigned(in);
      unsigned height = ReadUnsigned(in);
      string path = ReadLine(in);
      this.document.InsertImage(path, width, height, position);
    }
    catch (exception & e)
    {
      cout << e.what() << endl;
    }
  }

  private DeleteItem(input: string) {
    try
    {
      this.document.DeleteItem(ReadUnsigned(in));
    }
    catch (exception & e)
    {
      cout << e.what() << endl;
    }
  }

  private ReplaceText(input: string) {
    try
    {
      unsigned index = ReadUnsigned(in);
      string text = ReadLine(in);

      auto item = this.document.GetItem(index);
      if (!item.GetParagraph())
      {
        throw invalid_argument("Can't replace text in non-text item");
      }

      item.GetParagraph()->SetText(text);
    }
    catch (exception & e)
    {
      cout << e.what() << endl;
    }
  }

  private ResizeImage(input: string) {
    try
    {
      size_t index = ReadUnsigned(in);
      unsigned width = ReadUnsigned(in);
      unsigned height = ReadUnsigned(in);

      auto item = this.document.GetItem(index);
      if (!item.GetImage())
      {
        throw invalid_argument("Can't resize non-image");
      }
      item.GetImage()->Resize(width, height);
    }
    catch (exception & e)
    {
      cout << e.what() << endl;
    }
  }

  private Save(input: string) {
    try
    {
      string path = ReadLine(in);

      this.document.Save(path);
    }
    catch (exception & e)
    {
      cout << e.what() << endl;
    }
  }

  private List(input: string) {
    cout << "-------------" << endl;
    cout << this.document.GetTitle() << endl;
    for (unsigned i = 0; i < m_document->GetItemsCount(); i++)
    {
      auto item = this.document.GetItem(i);
      if (item.GetParagraph())
      {
        cout << i << ". Paragraph: " << item.GetParagraph()->GetText() << endl;
      }
      else
      {
        auto image = item.GetImage();
        cout << i << ". Image: " << image->GetWidth() << "x" << image->GetHeight() << " " << image->GetPath() << endl;
      }
    }
    cout << "-------------" << endl;
  }

  private Undo(input: string) {
    if (this.document.CanUndo())
    {
      this.document.Undo();
    }
    else
    {
      cout << "Can't undo" << endl;
    }
  }

  private Redo(input: string) {
    if (this.document.CanRedo())
    {
      this.document.Redo();
    }
    else
    {
      cout << "Can't redo" << endl;
    }
  }
}
