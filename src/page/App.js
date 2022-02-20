import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTrashAlt);

class App extends Component {
  state = {
    items: [
      {
        val: 1,
        id: "id 1"
      },
      {
        val: 2,
        id: "id 2"
      },
      {
        val: 3,
        id: "id 3"
      }
    ]
  };

  getItems = () => {
    let { items } = this.state;
    items = [
      {
        val: 1,
        id: 1
      },
      {
        val: 2,
        id: 2
      },
      {
        val: 3,
        id: 3
      }
    ];
    setTimeout(() => {
      this.setState({ items });
    }, 1000);
  };

  /* componentDidMount() {
    this.getItems();
  } */

  removeItem = (e) => {
    let target = `${
      e.target.tagName !== "svg" && e.target.tagName !== "path"
        ? e.target.name
        : !e.target.parentNode.name
        ? e.target.parentNode.parentNode.name
        : e.target.parentNode.name
    }`;
    console.log(
      `Removing: ${target} \n ${e.target.parentNode.name} \n ${e.target.tagName}`
    );
    let { items } = this.state;
    items = items.filter((item) => item.id !== target);
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="container w-10">
        {this.state.items &&
          this.state.items.map((item) => (
            <div key={item.id} className="row">
              <div className="col">{item.val}</div>
              <div className="col">{item.id}</div>
              <button
                type="button"
                className="btn btn-sm btn-secondary m-2 ml-auto"
                name={item.id}
                onClick={this.removeItem}
              >
                <FontAwesomeIcon name={item.id} icon={faTrashAlt} />
              </button>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
