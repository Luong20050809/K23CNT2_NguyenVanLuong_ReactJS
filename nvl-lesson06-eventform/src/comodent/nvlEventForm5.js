import React, { Component } from 'react';

class nvlEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvlName:'Lượng',
            nvlAge:20,
            nvlGender:'Female',
            nvlCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    nvlHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    nvlHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.nvlName + "\n" + this.state.nvlAge);

        // Chuyển dữ liệu trên form lên App component (nvlApp);
        this.props.onnvlHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='nvlName'>Student Name:</label>
                        <input type='text' name='nvlName' id='nvlName' 
                            value={this.state.nvlName}
                            onChange={this.nvlHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nvlAge'>Student Age:</label>
                        <input type='text' name='nvlAge' id='nvlAge' 
                            value={this.state.nvlAge}
                            onChange={this.nvlHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='nvlGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='nvlGender' id='nvlMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.nvlGender === 'Male'}
                                onChange={this.nvlHandleChange} />
                            <label htmlFor='nvlMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='nvlGender' id='nvlFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.nvlGender === 'Female'}
                                onChange={this.nvlHandleChange} />
                            <label htmlFor='nvlFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='nvlGender' id='nvlNone' className='mx-2'
                                value={'None'}
                                checked={this.state.nvlGender === 'None'}
                                onChange={this.nvlHandleChange} />
                            <label htmlFor='nvlNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='nvlCourse'>
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
                    </div>
                    <button onClick={this.nvlHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default nvlEventForm5;