import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <h1 className="head">
          The button has been clicked <span className="span">{count}</span>{' '}
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <div className="background1">
          <button onClick={this.onIncrement} type="button" className="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
