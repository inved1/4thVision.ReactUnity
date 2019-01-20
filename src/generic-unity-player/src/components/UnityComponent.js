import React, { Component } from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export default class UnityComponent extends Component {
  constructor(props) {
    super(props);


    this.unityContent = new UnityContent(
    //this paths are created by webpack!! check webpack config
      "assets/unity/_build.json",
      "assets/unity/UnityLoader.js"
    );

  }

  onClickToggleRotation() {
    console.log('toggle rot');
    this.unityContent.send("Cube", "toggleRotation");
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickToggleRotation.bind(this)}>{"ToggleRotation"}</button>
        <Unity unityContent={this.unityContent} height='400' width='400' />
       </div>
    );
  }
}