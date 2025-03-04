import React, { Component } from 'react';

class nvlEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            nvlCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    nvlHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            nvlCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    nvlHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.nvlCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='nvlCourse' id='nvlCourse' 
                            value={this.state.nvlCourse}
                            onChange={this.nvlHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.nvlHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default nvlEventForm2;