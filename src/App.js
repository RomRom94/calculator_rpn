import React, { Component } from 'react';
import ClearAll from './ClearAll/ClearAll.js';
import Push from './Push/Push.js';
import Button from './Button/Button.js';
import Drop from './Drop/Drop.js'
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

  dropHandler = () => {
    const stackVals = this.state.stack
    let inputActive = stackVals[0]
    inputActive = inputActive ? inputActive.toString().slice(0, -1) : inputActive
    inputActive = inputActive ? inputActive : 0
    this.setState({ stack: [inputActive, ...stackVals.slice(1)] })
  }

  clearAll = () => {
    this.setState({ stack: [0] })
  }

  actionPM = () => {
    const stackVals = this.state.stack
    let inputActive = -1 * parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({ stack: [inputActive, ...stackVals.slice(1)] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <table className="calculatrice" id="calc">
            <tbody>
              <tr>
                <td colSpan="4" className="calc_td_resultat">
                  <div>
                    {this.state.stack.slice(0).reverse().map(el => (
                      <h1 className="input-active">{el}</h1>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="button clear">
                  <ClearAll symbol='C' click={() => this.clearAll()} />
                </td>
                <td className="button">
                  <Button symbol='±' click={() => this.actionPM()} />
                </td>
                <td className="button">
                  <Button symbol='/' click={() => this.divisionHandler()} />
                </td>
                <td className="button">
                  <Button symbol='×' click={() => this.multiplicationHandler()} />
                </td>
              </tr>
              <tr>
                <td >
                  <Button symbol='1' click={() => this.appendToInputActive(1)} />
                </td>
                <td >
                  <Button symbol='2' click={() => this.appendToInputActive(2)} />
                </td>
                <td >
                  <Button symbol='3' click={() => this.appendToInputActive(3)} />
                </td>
                <td className="button">
                  <Button symbol='-' click={() => this.subtractionHandler()} />
                </td>
              </tr>
              <tr>
                <td >
                  <Button symbol='4' click={() => this.appendToInputActive(4)} />
                </td>
                <td >
                  <Button symbol='5' click={() => this.appendToInputActive(5)} />
                </td>
                <td >
                  <Button symbol='6' click={() => this.appendToInputActive(6)} />
                </td>
                <td className="button">
                  <Button symbol='+' click={() => this.additionHandler()} />
                </td>
              </tr>
              <tr>
                <td >
                  <Button symbol='7' click={() => this.appendToInputActive(7)} />
                </td>
                <td >
                  <Button symbol='8' click={() => this.appendToInputActive(8)} />
                </td>
                <td >
                  <Button symbol='9' click={() => this.appendToInputActive(9)} />
                </td>
                <td className="button enter" rowSpan="2">
                  <Push symbol='Enter' click={() => this.pushToStackHandler()} />
                </td>
              </tr>
              <tr>
                <td className="button">
                  <Drop symbol='&#8701;' click={() => this.dropHandler()} />
                </td>
                <td >
                  <Button symbol='0' click={() => this.appendToInputActive(0)} />
                </td>
                <td >
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
