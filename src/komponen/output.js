import React, { Component } from 'react';



class Output extends Component {

  render() {
    return (
      <div>
          <div className="output">
            <h1>halo {this.props.id}</h1>
          </div>
               
      </div>
     
    );
  }
}

export default Output;