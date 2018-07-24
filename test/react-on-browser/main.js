"use strict";

const elem = React.createElement;
const divStyle = {
  margin: '40px',
  border: '5px solid pink'
};
function wel(props){
  return elem('h1',props.name)
}
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  test() {
    ReactDOM.findDOMNode(this.refs.ssss)
    console.log(this.refs.ssss);
    this.setState({ liked: true });
  }
  render() {
    if (this.state.liked) {
      return "You liked this.";
    }
    return elem("button", { onClick: () => this.test() ,ref:'ssss',style:divStyle}, wel);
  }
}
const domContainer = document.querySelector("#root");
ReactDOM.render(elem(LikeButton), domContainer, s => {
  console.log(s);
});
