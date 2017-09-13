import React, { Component } from "react";

class Gif extends Component {
  render() {
    console.log("Q rendering");
    console.log(this.props.singleGif.images.original.webp);
    console.log(this.props.singleGif.images.original.webp);
    return <div className="nothing">
    {console.log('link::::', this.props.singleGif.images.original.webp)}
    <img src={this.props.singleGif.images.original.webp} alt=""/> 
    </div>;
  }
}

export default Gif;
