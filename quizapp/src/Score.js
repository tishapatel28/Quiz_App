import React, { Component } from 'react'

export default class Score extends Component {
  render() {

    const{Score,onNextQuetion}=this.props;

    return(
        <div>
            <h2>Result:</h2>
            <h4>Your Score:{Score}/5</h4>
        </div>
    )

    
  }
}
