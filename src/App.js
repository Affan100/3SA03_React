import React from 'react';
import Event from './Event';
import Test from './Test';
import './App.css';
import Begin from './Begin'
import _ from 'lodash';


const message = 'Engineer'
const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase()
  let chars = _.shuffle(Array.from(word))
  return {
    word,
    chars,
    counter: 1,
    guess: [],
    completed: false,
    check: 0
  }
}
class App extends React.Component {
  state = {
    show: false,
    give_up: false
  }
  state = prepareStateFromWord(message);
  click = (value) => {
    let guess = [...this.state.guess, value]
    this.setState({ guess })
    if (guess.length === this.state.chars.length) {
      if (guess.join('').toString() === this.state.word) {
        this.setState({ guess: [], completed: true })
      } else {
        this.setState({ guess: [], counter: this.state.counter + 1 })
      }
    }
  }
  show_name = () => {
    this.setState({
      show: !this.state.show
    })
    console.log(this.state.show) // check
  }

  reset = () => {
    this.setState({ check: this.state.check + 1, completed: false })
  }
  give_ups = () => {
    this.setState({
      give_up: !this.state.give_up
    })
  }
  render() {
    let test = this.state.completed === false ? '' : <button className="button" onClick={this.reset}><h1>Again!</h1></button>;
    let ans = this.state.completed === false ? '' : <h3 className="ans">Well done {message}</h3>;
    let tests = this.state.completed === false ? '' : <h1 className="win">The Winner</h1>;
    return (
      <div>
        <div>
          <Begin />
        </div>
        <div className="first">
          <div className="second">
            <div className="center-box">
              <div className="center-text">
                <div className="text1"><h1 className="text">LAB_3SA03_React 6035512016</h1></div>
                <div className="click">
                  <div className="button-a">
                  </div>
                  <div className="box-myname">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {
                Array.from(this.state.chars).map((item, index) => (
                  <Event
                    value={item}
                    key={index}
                    click={this.click}
                    number={this.state.counter}
                    check={this.state.check}
                  />
                ))
              }
              <div className="box">
                <h1 className="text">Please Select</h1>
                <h1 className="text">Three rounds only</h1>
                {
                  Array.from(this.state.guess).map((item, index) => (
                    <Event
                      value={item}
                      key={index}
                      click={this.click}
                    />
                  ))
                }
                <div>
                  <Test check_count={this.state.counter} />
                </div>
                <div className="button-area">
                  {test}
                  {ans}
                  {tests}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App; 
