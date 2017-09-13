import React, { Component } from "react";
import Gif from "./Gif";

class GifList extends Component {
  render() {
    console.log(this.props.data);

        return (
            <div>
        <form>
          <input id="one" placeholder="Type Something" />
          <input id="two" placeholder="How Many" />
          <button onClick={ (e) => this.props.changeGiphy(e,document.querySelector('#one').value, document.querySelector('#two').value)}> Search </button>
          </form> 
          {(this.props.isLoggedIn) ? this.props.data.map(gif => <Gif singleGif={gif} key={gif.id} />) : <div /> }

        </div>
      );

  
  }
}

export default GifList;
