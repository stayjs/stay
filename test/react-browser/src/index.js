import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';

let click = ()=>{
  console.log('app is clicked')
}
class Dig extends Component{
  render(){
    return(
<div className='dialog'>dialog</div>
    )
  }
}
class Dialog extends Component{
  constructor(props){
    super(props)
    this.state = {
      show:false
    }
  }
  componentDidMount(){
    console.log('mount')
    let me = this
    setTimeout(function(){
      me.setState({show:false})
    },2000)
    
  }
  switchDialog(){
    this.setState({show:!this.state.show})
  }
  render(){
    let me = this
    console.log('render')
    return(
      <div>
        <button onClick={this.switchDialog.bind(this)}>
        {this.state.show?'opend':'closed'}
        </button>
        {this.state.show?<Dig/>:''}
      </div>
    )
  }
}
class Form extends Component{
  render(){
    return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>)
  }
}
ReactDOM.render(<Dialog/>, document.getElementById('root'));
