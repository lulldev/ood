import * as React from 'react';

export default class ShapeStore extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    if (this.props.shapeStore.length === 0) {
      return null;
    }
    return (
      <div>
        Добавленные фигуры для рисования:
        <ul>
          {this.props.shapeStore.map((shapeName: string, index: number) =>
            (<li key={index}>{shapeName}</li>))}
        </ul>
      </div>
    );
  }
}