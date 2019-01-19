import React, { Component } from "react";
import Unity, { UnityContent } from "react-unity-webgl";

export default class Demo extends Component {
  constructor(props) {
    super(props);


    this.unityContent = new UnityContent(
    //this paths are created by webpack!! check webpack config
      "assets/unity/_build.json",
      "assets/unity/UnityLoader.js"
    );

  }

  render() {
    return (
        <div>
        <Unity unityContent={this.unityContent} />

        </div>

        //https://github.com/jeffreylanters/react-unity-webgl-test
      
    );
  }
}