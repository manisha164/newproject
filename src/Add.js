import React from "react";

class TableParameter extends React.Component {
constructor() {
super();
this.state = { a: null, b: null, c: "", tabledata: "" };
}

sum = () => {
var a1 = this.state.a,
b1 = this.state.b,
c1 = this.state.c;
c1 = a1 -  b1;
this.setState({ c: c1 });
};

tableparameter = () => {
var i1 = this.state.a,
i2 = this.state.b,
tabledata = "";

for (let i = i1; i <= i2; i++) {
tabledata += "-";
tabledata += " <br /> ";
for (let j = 1; j <= 10; j++) {
if ((j * i) % 2 === 1) tabledata += "(Odd)";
else tabledata += "(Even)";
tabledata += i * j;
tabledata += " ";
}
}

this.setState({ tabledata: tabledata });
};
myChangeHandler = (event) => {
let nam = event.target.name;
let val = event.target.value;
this.setState({ [nam]: val });
};

render() {
return (
<>
<form>
<h1>
{this.state.a} {this.state.b}
</h1>
<p>Enter your first number:</p>
<input type="integer" name="a" onChange={this.myChangeHandler} />
<p>Enter your second number:</p>
<input type="integer" name="b" onChange={this.myChangeHandler} />
</form>
<div>
<h1>Hi, I am TableParameter component .</h1>
<h2>
a[{this.state.a}] - b[{this.state.b}] = c [{this.state.c}]
</h2>
<button type="button" onClick={this.sum}>
a - b
</button>

<button type="button" onClick={this.tableparameter}>
Print Table
</button>
<div>
Without HTML Tags:
<br /> {this.state.tabledata} <br /> With HTML Tags:
</div>
<div dangerouslySetInnerHTML={{ __html: this.state.tabledata }} />
</div>
</>
);
}
}

export default TableParameter;

/*  if(input === '' && input1===''){
            return false;
        }*/