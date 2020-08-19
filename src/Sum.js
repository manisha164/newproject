import React from "react";

class Table extends React.Component {
  constructor() {
    super();
    this.state = { a: '', b: '', c: null, tabledata: "" };
  }

  sum = () => {
    var a1 = this.state.a,
      b1 = this.state.b,
      c1 = this.state.c;
    c = a + b;
    this.setState({ c: c });
  };

  table = () => {
    var tabledata = "";

    for (let i = 1; i <= 10; i++) {
      tabledata += "-";
      tabledata += " <br /> ";
      for (let j = 1; j <= 10; j++) {
        if ((j * i) % 2 == 1) tabledata += "(Odd)";
        else tabledata += "(Even)";
        tabledata += i * j;
        tabledata += "      ";
      }
    }

    this.setState({ tabledata: tabledata });
  };

  render() {
    return (
      <div>
        <h1>Hi, I am table component.</h1>
        <h2>
          a[{this.state.a}] + b[{this.state.b}] = c [{this.state.c}]
        </h2>
        <button type="button" onClick={this.sum}>
          a + b
        </button>

        <button type="button" onClick={this.table}>
          Print Table
        </button>
        <div>
          Without HTML Tags:
          <br /> {this.state.tabledata} <br /> With HTML Tags:
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.state.tabledata }} />
      </div>
    );
  }
}

export default Table;