import React, { Component } from "react";

class nvlEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvlSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    nvlHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.nvlSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            nvlSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    nvlHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.nvlSelectCheckBox);
    }
  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.nvlSelectCheckBox.includes("Apple")}
              onChange={this.nvlHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.nvlSelectCheckBox.includes("Banana")}
              onChange={this.nvlHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.nvlSelectCheckBox.includes("Orange")}
              onChange={this.nvlHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.nvlHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default nvlEventForm4;