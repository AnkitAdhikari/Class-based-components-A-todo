/* eslint-disable react/destructuring-assignment */
import { Component } from "react";
import Count from "./Count";
import Task from "./Task";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "",
      isEditing: false,
      editVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(deleteTodo) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo != deleteTodo),
      inputVal: state.inputVal,
    }));
  }

  handleUpdate(updatedTodo, prevTodo) {
    let copy = this.state.todos.slice(0);
    let index = this.state.todos.indexOf(prevTodo);
    copy[index] = updatedTodo;
    this.setState((state) => ({
      ...state,
      todos: copy,
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor='task-entry'>Enter a task: </label>
          <input
            type='text'
            name='task-entry'
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type='submit'>Submit</button>
        </form>
        <h4>
          All the tasks! | total:{<Count count={this.state.todos.length} />}
        </h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              <Task
                todo={todo}
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
