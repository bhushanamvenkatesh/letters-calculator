import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: '0'}

  onInputChange = event => {
    const phrase = event.target.value

    this.setState({count: phrase.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="letter-counter-container">
          <div>
            <h1 className="color heading">Calculate the Letters you enter</h1>
            <label htmlFor="Enter the phrase" className="color">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input"
              placeholder="Enter the phrase"
              onChange={this.onInputChange}
              id="Enter the phrase"
            />
            <div className="count-container">
              <p>No.of letters: {count}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
