import React, { Component } from 'react';

class nvlEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvlStudentName:'Nguyễn Lượng',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (nvlStudentName) thay đổi
    nvlHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            nvlStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    nvlHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.nvlStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.nvlHandleSubmit}>
                    <label htmlFor='nvlStudentName'>
                        <input type='text' name='nvlStudentName' id='nvlStudentName' 
                            value={this.state.nvlStudentName}
                            onChange={this.nvlHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default nvlEventForm1;