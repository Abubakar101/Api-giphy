import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import GifList from "./components/GifList.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      apiData: "",
      isLoggedIn:false,
    };

    this.changeGiphy = this.changeGiphy.bind(this);
  }
  // componentDidMount() {
  //   console.log("component mount");
  //   axios(
  //     `http://api.giphy.com/v1/gifs/search?q=airplane&api_key=b95e724814684d169784917b0905348a&limit=1`
  //   ).then(res => {
  //     console.log(res.data.data[0].images.original.webp);
  //     this.setState({
  //       apiData: res.data.data,
  //     });
  //   });}

  changeGiphy(e,search, limit) {
    e.preventDefault();
    axios(
      `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=b95e724814684d169784917b0905348a&limit=${limit}`
    ).then(res => {
      console.log(res.data.data);
      console.log(search, limit);
      this.setState({
        apiData: res.data.data,
        isLoggedIn:true,
      });
      console.log(this.state.apiData)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <GifList isLoggedIn={this.state.isLoggedIn}
          changeGiphy={this.changeGiphy}
          data={this.state.apiData}
        />
      </div>
    );
  }
}

export default App;
