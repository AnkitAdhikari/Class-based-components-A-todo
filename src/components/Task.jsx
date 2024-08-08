import { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      prevTodo: props.todo,
      currTodo: props.todo,
    };
    this.toggleEditing = this.toggleEditing.bind(this);
  }
  toggleEditing() {
    this.setState((state) => ({
      ...state,
      isEditing: !state.isEditing,
    }));
  }
  render() {
    let btns = (
      <>
        <button
          type='button'
          onClick={() => {
            if (this.state.isEditing) {
              this.props.handleUpdate(this.state.currTodo, this.state.prevTodo);
            }
            this.toggleEditing();
          }}
        >
          {this.state.isEditing ? "Resubmit" : "Edit"}
        </button>
        <button
          type='button'
          onClick={() => {
            this.props.handleDelete(this.props.todo);
          }}
        >
          Delete
        </button>
      </>
    );
    if (this.state.isEditing) {
      return (
        <>
          <input
            value={this.state.currTodo}
            onChange={(e) => {
              this.setState((state) => ({
                ...state,
                currTodo: e.target.value,
              }));
            }}
          />
          {btns}
        </>
      );
    } else {
      return (
        <>
          {this.props.todo}
          {btns}
        </>
      );
    }
  }
}

export default Task;
