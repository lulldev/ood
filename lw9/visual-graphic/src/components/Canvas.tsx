import * as React from 'react';

interface IProps {
  canvasHTMLId: string;
}

export const Canvas = (props: IProps) => {
  return (
    <div>
      <canvas id={props.canvasHTMLId}/>
    </div>
  );
};
