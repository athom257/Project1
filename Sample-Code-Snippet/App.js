import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log('constructor');
    }

    onClick(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
   	 return <div>
   						 <h1>Hello, World!</h1>
   						 <h1>{this.state.count}</h1>
   						 <form>
   						 <button type="submit" onClick={this.onClick.bind(this)} className="btn btn-primary">Submit</button>
   						 </form>


   			 </div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
