import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//comment

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {};
  handleSubmit = (e) => {};
  clearList = () => {};
  handleDelete = (id) => {};
  handleEdit = (id) => {};

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">TodoInput</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.state.handleChange}
                handleSubmit={this.state.handleSubmit}
                editItem={this.state.editItem}
              ></TodoInput>
              <TodoList
                items={this.state.items}
                clearList={this.state.clearList}
                handleDelete={this.state.handleDelete}
                handleEdit={this.state.handleEdit}
              ></TodoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
