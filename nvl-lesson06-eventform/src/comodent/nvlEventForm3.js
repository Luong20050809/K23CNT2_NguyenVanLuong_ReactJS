import React, { Component } from 'react';

class nvlEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvlGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    nvlHandleChange = (event)=>{
        this.setState({
            nvlGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    nvlHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.nvlGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='nvlGioiTinh'  id='nvlNam' className='mx-2'
                            value="Nam" checked={this.state.TttGioiTinh === 'Nam'} onChange={this.nvlHandleChange}/> 
                            <label htmlFor='nvlNam'>Nam</label>  
                        <input type='radio' name='nvlGioiTinh'  id='nvlNu' className='mx-2'
                            value="Nữ" checked={this.state.TttGioiTinh === 'Nữ'} onChange={this.nvlHandleChange}/> 
                            <label htmlFor='nvlNu'>Nữ</label>  
                        <input type='radio' name='nvlGioiTinh' id='nvlKhac' className='mx-2'
                            value="Khác" checked={this.state.nvlGioiTinh === 'Khác'} onChange={this.nvlHandleChange}/> 
                            <label htmlFor='nvlKhac'>Khác</label>
                    </div>
                    <button onClick={this.nvlHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default nvlEventForm3;