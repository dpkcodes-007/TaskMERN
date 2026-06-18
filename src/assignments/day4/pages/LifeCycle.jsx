import React, { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super()
    console.log("Constructor Called")
  }

  componentDidMount() {
    console.log("Component Mounted")
  }

  componentDidUpdate() {
    console.log("Component Updated")
  }

  componentWillUnmount() {
    console.log("Component Unmounted")
  }

  render() {
    console.log("Render Method Called")

    return (
      <>
        <h1>Lifecycle Methods CHECK CONSOLE.LOG</h1>
      </>
    );
  }
}

export default LifeCycle;