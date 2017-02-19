import React from 'react';
import * as FunctionUtil from './FunctionUtil';
import * as action from './colorAction';
import { connect } from 'react-redux';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myFunction = this.myFunction.bind(this);
        this.updateCurrentState = this.updateCurrentState.bind(this);
        this.state = {
            selectedColorState: 'Aqua'
        }
        console.log('MainComponent Constructor invoked ...');
    }

    myFunction() {
        var obj = document.getElementById('exampleSelect1');
        var colorSelected = obj.options[obj.selectedIndex].text;
        console.log('colorSelected : ', colorSelected);
        this.updateCurrentState(colorSelected);
    }

    updateCurrentState(selectedColor) {
        this.setState({
            selectedColorState: selectedColor
        });
        this.props.dispatch(action.updateColor(selectedColor)); // eslint-disable-line
    }

    render() {
        var currentColor = FunctionUtil.getColorBackGround();
        if (currentColor !== this.state.selectedColorState) {
            console.log('Setting new color');
            FunctionUtil.updateBackGroundColor(this.state.selectedColorState);
        }

        return <div>
          <h1>Hello, World!</h1>
          <div className='form-group'>
            <label>Choose Color&nbsp;&nbsp;</label>
            <select className='form-control' id='exampleSelect1'>
              <option>Aqua</option>
              <option>Olive</option>
              <option>Gray</option>
              <option>DarkSeaGreen</option>
              <option>CadetBlue</option>
            </select>
          </div>
          <button type='submit' onClick={this.myFunction} className='btn btn-primary'>Submit</button>
        </div>
    }
}

export default connect(null)(MainComponent);
