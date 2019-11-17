import React from "react";
import ReactDOM from "react-dom";
import SelectedCow from "./components/SelectedCow"
import CowList from "./components/CowList"
import AddCow from "./components/AddCow"
import controllers from "../../server/controllers"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cowList: [{
        "name": "Loading",
        "description": "Loading",
        "id": 1
      }],
      selectedCow: {
        "name": "Loading",
        "description": "Loading",
        "id": 1
      }
    }
    this.changeSelectedCow = this.changeSelectedCow.bind(this);
    this.addInputtedCow = this.addInputtedCow.bind(this);
  }

  componentDidMount() {
    controllers.getCowList()
      .then(({ data }) => {
        this.setState({ cowList: data, selectedCow: data[0] });
      })
  }

  changeSelectedCow(newSelectedCow) {
    this.setState({ selectedCow: newSelectedCow })
  }

  addInputtedCow(newCowInput) {
    newCowInput.preventDefault();
    let newCow = {
      name: newCowInput.target[0].value,
      description: newCowInput.target[1].value
    };
    controllers.addCow(newCow)
      .then(({ data }) => {
        if (data[1]) {
          let currCowList = this.state.cowList;
          currCowList.push({
            name: data[0].name,
            description: data[0].description,
            id: data[0].id
          })
          this.setState({ cowList: currCowList })
        }

      })
  }

  render() {
    return (
      <>
        <div className="selectedCow">
          <SelectedCow cow={this.state.selectedCow} />
        </div>
        <div className="addCow">
          <AddCow handleSubmit={this.addInputtedCow} />
        </div>
        <div className="cowList" >
          <CowList cowList={this.state.cowList} selectCowHandler={this.changeSelectedCow} />
        </div>
      </>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);