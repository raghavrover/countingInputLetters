import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  addSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="bg-container">
        <div className="letters-content-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
          <div className="letters-counting-card">
            <h1 className="heading-text">Calculate the Letters you enter</h1>
            <div className="label-input-container">
              <label className="enter-the-phrase-txt" htmlFor="inputText">
                Enter the phrase
              </label>
              <input
                className="input-text"
                placeholder="Enter your text"
                id="inputText"
                value={searchInput}
                onChange={this.addSearchInput}
              />
            </div>
            <p className="no-of-letters">No.of letters: {searchInput.length}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
