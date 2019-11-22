import React, { Component } from 'react';
import Clear from './Clear/Clear.js';
import ClearAll from './ClearAll/ClearAll.js';
import Push from './Push/Push.js';
import Button from './Button/Button';
import './App.css';

class App extends Component {
  state = {
    stack: [0]
  }

  pushToStackHandler = () => {
    const stackVals = this.state.stack;
    this.setState({ stack: [0, ...stackVals] });
  }

  appendToInputActive = (value) => {
    const stackVals = this.state.stack;
    let inputActive = stackVals[0];
    inputActive = inputActive ? inputActive.toString() + value.toString() : value.toString();
    this.setState({ stack: [inputActive, ...stackVals.slice(1)] });
  }

  additionHandler = () => {
    const stackVals = this.state.stack
    let inputActive = parseFloat(stackVals[1], 10) + parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({ stack: [inputActive, ...stackVals.slice(2)] })
  }

  subtractionHandler = () => {
    const stackVals = this.state.stack
    let inputActive = parseFloat(stackVals[1], 10) - parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({ stack: [inputActive, ...stackVals.slice(2)] })
  }

  multiplicationHandler = () => {
    const stackVals = this.state.stack
    let inputActive = parseFloat(stackVals[1], 10) * parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({ stack: [inputActive, ...stackVals.slice(2)] })
  }

  divisionHandler = () => {
    const stackVals = this.state.stack
    let inputActive = parseFloat(stackVals[1], 10) / parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({ stack: [inputActive, ...stackVals.slice(2)] })
  }

  decimalToInputActive = () => {
    const stackVals = this.state.stack;
    let inputActive = stackVals[0];
    inputActive = inputActive.toString();

    if (inputActive.includes('.')) {

    }
    else {
      inputActive = inputActive + '.';
      this.setState({ stack: [inputActive, ...stackVals.slice(1)] });
    }
  }

  clearHandler = () => {
    const stackVals = this.state.stack
    let inputActive = stackVals[0]
    inputActive = inputActive ? inputActive.toString().slice(0, -1) : inputActive
    inputActive = inputActive ? inputActive : 0
    this.setState({ stack: [inputActive, ...stackVals.slice(1)] })
  }

  clearAll = () => {
    this.setState({ stack: [0] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <table className="calculatrice" id="calc">
            <tbody>
              <tr>
                <td colSpan="4" className="calc_td_resultat">
                  <h1 className="input-active">{this.state.stack[0]}</h1>
                </td>
              </tr>
              <tr>
                <td className="calc_td_btn">
                  <Push symbol='enter' click={() => this.pushToStackHandler()} />
                </td>
                <td className="calc_td_btn">
                  <ClearAll symbol='AC' click={() => this.clearAll()} />
                </td>
                <td className="calc_td_btn">
                  <Clear symbol='<-' click={() => this.clearHandler()} />
                </td>
                <td className="calc_td_btn">
                  <input type="button" className="calc_btn" value="%" />
                </td>
                <td className="calc_td_btn">
                  <Button symbol='+' click={() => this.additionHandler()} />
                </td>
              </tr>
              <tr>
                <td className="calc_td_btn">
                  <Button symbol='7' click={() => this.appendToInputActive(7)} />
                </td>
                <td className="calc_td_btn">
                  <Button symbol='8' click={() => this.appendToInputActive(8)} />
                </td>
                <td className="calc_td_btn">
                  <Button symbol='9' click={() => this.appendToInputActive(9)} />
                </td>
                <td className="calc_td_btn">
                  <Button symbol='-' click={() => this.subtractionHandler()} />
                </td>
              </tr>
              <tr>
                <td className="calc_td_btn">
                  <Button symbol='4' click={() => this.appendToInputActive(4)} />
                </td>
                <td className="calc_td_btn">
                  <Button symbol='5' click={() => this.appendToInputActive(5)} />
                </td>
                <td className="calc_td_btn">
                  <Button symbol='6' click={() => this.appendToInputActive(6)} />
                </td>
                <td className="calc_td_btn">
                  <Button symbol='×' click={() => this.multiplicationHandler()} />
                </td>
              </tr>
              <tr>
                <td className="calc_td_btn">
                  <Button symbol='1' click={() => this.appendToInputActive(1)} />
                </td>
                <td className="calc_td_btn">
                  <Button symbol='2' click={() => this.appendToInputActive(2)} />
                </td>
                <td className="calc_td_btn">
                  <Button symbol='3' click={() => this.appendToInputActive(3)} />
                </td>
                <td className="calc_td_btn">
                  <Button symbol='/' click={() => this.divisionHandler()} />
                </td>
              </tr>
              <tr>
                <td className="calc_td_btn">
                  <Button symbol='0' click={() => this.appendToInputActive(0)} />
                </td>
                <td className="calc_td_btn">
                  <input type="button" className="calc_btn" value="&plusmn;" />
                </td>
                <td className="calc_td_btn">
                  <Button symbol=',' click={() => this.decimalToInputActive()} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;