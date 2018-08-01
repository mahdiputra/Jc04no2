import React, { Component } from 'react';
import Output from './komponen/output';


class App extends Component {
  constructor(){
    super();
    this.state = {
        inputUser: 'Anda belum memasukkan nama'
    }
  }

  klik(){
      this.setState({
          inputUser: this.refs.nama.value, 
      })
  }

    render() {
        return(
            <div className="App">
            <center>
              <div className="tabmenu" style={{width:"400px",margin:"200px",background:"white"}}>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Welcome</a>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div classNameName="login">
                      <label>Name</label><br/>
                      <input ref="nama" type="text"/><br/><br/>
                      <button type="button" className="btn btn-primary" onClick={()=>{this.klik();}}>Submit</button>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Output id={this.state.inputUser} ></Output>
                  </div>
                </div>
              
              </div>
            </center>
            </div>
        )
    }
}

export default App;
