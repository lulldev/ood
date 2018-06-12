import * as React from 'react';

import HarmonicFuncGraphContainer from './HarmonicFuncGraph';

class Editor extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <HarmonicFuncGraphContainer/>
    )
  }
}

export default Editor;
