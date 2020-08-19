import React from'react';
import './Table.css';



 class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            total: 0,
            num: 0,
        }
    }
    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    add = () => {
        const{number1, number2} = this.state;
        this.setState({
            
            total: (parseInt(number1)+parseInt(number2))
        
            
        })
    }

        tabel = () => {
           let num = 0;
 
           let tabledata;
            
              for (let j = 1; j <= 10; j++) {
                tabledata=num*j;  
            }
        
            this.setState({ tabledata: tabledata });
          };
      

    

    render() {
        const {total} = this.state;
        const {tabledata} = this.state;
        return (
            <div className="main">
           
                 <div className="main_tag">
                     <label>Enter firstNumber </label><br />
                     <input type="text" name="number1" onChange={this.handleChange} />
                </div>
                <div className="secound">
                     <label>Enter secondnumber</label><br />
                     <input type="text" name="number2" onChange={this.handleChange}/>
                </div>
                <button className="btn" onClick={this.add}>a+b</button>   <div>{total}</div>
               
                <div className="num
                ">
                     <label>Enter any number for table</label><br />
                     <input type="text" name="num" />
                     <button className="btn" onClick={this.tabel}>Print Table</button> <div>{tabledata}</div>

                    
                </div>
                
             
            </div>
        );
    }
}

export default Table;