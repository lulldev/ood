import { Point } from '../shape_drawing_lib/shape_drawing_lib'

export class CModernGraphicsRenderer {

  private out: string;
  private isDrawing: boolean;

  constructor(out: string) {
    this.out = out;
  }

  // BeginDraw(): void {
  //   if (m_drawing) {
  //     throw logic_error(&quot;Drawing has already begun&quot;);
  //   }
  //   m_out &lt;&lt; &quot;&lt;draw&gt;&quot; &lt;&lt; endl;
  //   m_drawing = true;
  // }

  DrawLine(start: Point, end: Point): void {
    console.log(start, end);
    // if (!m_drawing) {
    //   throw logic_error(&quot;DrawLine is allowed between BeginDraw()/EndDraw() only&quot;);
    // }
    // m_out &lt;&lt; boost::format(R&quot;( &lt;line fromX=&quot;%1%&quot; fromY=&quot;%2&quot; toX=&quot;%3%&quot; toY=&quot;%4%&quot;/&gt;)&quot;)
    // &lt;&lt; endl;
  }

  EndDraw(): void {
    // if (!m_drawing) {
    //   throw logic_error(&quot;Drawing has not been started&quot;);
    // }
    // m_out &lt;&lt; &quot;&lt;/draw&gt;&quot; &lt;&lt; endl;
    // m_drawing = false;
  }
}
