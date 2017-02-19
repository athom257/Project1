import React, { Component, PropTypes } from 'react';
import * as FunctionUtil from './FunctionUtil';

export default class Test extends Component {
  render() {
  var name = 'Antone Thomas';
  const value = this.props.textName;
  const v1 = FunctionUtil.getDivTag();
  let totalAmt = 1 + 2 + 3;
   return (
     <div>
       <h1>Echo TestComponent, {name}</h1>
       <h1>{this.props.textName}</h1>
       {v1}
       <h1>{FunctionUtil.getStringValue()}</h1>
       <h1>{totalAmt}</h1>
       <h2>{FunctionUtil.getNumberValue()}</h2>
     </div>
   );
 }
}
