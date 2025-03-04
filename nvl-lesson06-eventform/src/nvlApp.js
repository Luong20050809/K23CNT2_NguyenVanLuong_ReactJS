import React, { Component } from 'react';
import nvlEventForm1 from './components/nvlEventForm1';
import nvlEventForm2 from './components/nvlEventForm2';
import nvlEventForm3 from './components/nvlEventForm3';
import nvlEventForm4 from './components/nvlEventForm4';
import nvlEventForm5 from './components/nvlEventForm5';

class nvlApp extends Component {



  // Hàm xử lý nhận dữ liệu từ form student
  nvlHandleSubmitForm = (param)=>{
    console.log("Student:",param);
  }

  render() {
    return (
      <div className='container border my-3 bg-white'>
          <h1 className='text-center'>Event Form - Demo</h1>
          <hr/>
          <nvlEventForm1 />
          <nvlEventForm2 />
          <nvlEventForm3 />
          <nvlEventForm4 />
          <nvlEventForm5 onnvlHandleSubmit={this.nvlHandleSubmitForm}/>
      </div>
    );
  }
}

export default nvlApp;