import * as React from 'react';

export default class CanvasArea extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <canvas id={this.props.canvasHTMLID}/>
      </div>
    );
  }
}