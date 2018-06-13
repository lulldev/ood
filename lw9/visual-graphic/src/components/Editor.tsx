import * as React from 'react';

import HarmonicGraph from './HarmonicGraph';

class Editor extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <HarmonicGraph/>
    )
  }
}

export default Editor;
