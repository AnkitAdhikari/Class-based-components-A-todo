import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <>{this.props.count}</>;
  }
}

export default Count;
