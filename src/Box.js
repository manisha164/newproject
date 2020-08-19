import React from "react";

class ButtonChallenge1 extends React.Component {
  constructor() {
    super();
  }

  myClickHandler = (event) => {
    let nam = event.target.name;
    alert("Button color is: " + nam);
  };

  render() {
    return (
      <div>
        <h1>Hi, I am ButtonChallenge component.</h1>
        <div>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="red"
            style={{ backgroundColor: "red", width: "150px", height: "60px", margin: "20px" }}
          >
            Color1
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="blue"
            style={{ backgroundColor: "blue", width: "150px", height: "60px", margin: "20px" }}
          >
            Color2
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="green"
            style={{ backgroundColor: "green", width: "150px", height: "60px", margin: "20px" }}
          >
            Color3
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="teal"
            style={{ backgroundColor: "teal", width: "150px", height: "60px", margin: "20px" }}
          >
            Color4
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="orange"
            style={{ backgroundColor: "orange", width: "150px", height: "60px", margin: "20px" }}
          >
            Color5
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="purple"
            style={{ backgroundColor: "purple", width: "150px", height: "60px", margin: "20px" }}
          >
            Color6
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="yellow"
            style={{ backgroundColor: "yellow", width: "150px", height: "60px", margin: "20px" }}
          >
            Color7
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="skyblue"
            style={{ backgroundColor: "skyblue", width: "150px", height: "60px", margin: "20px" }}
          >
            Color8
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="brown"
            style={{ backgroundColor: "brown", width: "150px", height: "60px", margin: "20px" }}
          >
            Color9
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonChallenge1;