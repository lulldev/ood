import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from 'recharts';
import * as React from 'react';

export default class HarmonicGraphic extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    const data: any = [
      { uv: 1, pv: 2400, amt: 2400},
      { uv: 10, pv: 1398, amt: 2210},
      { uv: 2, pv: 9800, amt: 2290},
      { uv: 4, pv: 3908, amt: 2000},
      { uv: 2, pv: 4800, amt: 2181},
      { uv: 1, pv: 3800, amt: 2500},
      { uv: -1, pv: 4300, amt: 2100},
    ];
    return (
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    );
  }
}
