import React, { Component } from 'react';
import ClearAll from './ClearAll/ClearAll.js';
import Push from './Push/Push.js';
import Button from './Button/Button.js';
import Drop from './Drop/Drop.js'
import Swap from './Swap/Swap.js'
import Delete from './Delete/Delete'
import './App.css';

class App extends Component {
  state = {
    stack: [0]
  }

  enter = () => {
    const stackVals = this.state.stack;
    this.setState({ stack: [0, ...stackVals] });
  }

  appendNumber = (value) => {
    const stackVals = this.state.stack;
    let inputActive = stackVals[0];
    inputActive = inputActive ? inputActive.toString() + value.toString() : value.toString();
    this.setState({ stack: [inputActive, ...stackVals.slice(1)] });
  }

  addition = () => {
    const stackVals = this.state.stack
    let inputActive = parseFloat(stackVals[1], 10) + parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({ stack: [inputActive, ...stackVals.slice(2)] })
  }

  subtraction = () => {
    const stackVals = this.state.stack
    let inputActive = parseFloat(stackVals[1], 10) - parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({ stack: [inputActive, ...stackVals.slice(2)] })
  }

  multiplication = () => {
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

  decimal = () => {
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

  delete = () => {
    const stackVals = this.state.stack
    let inputActive = stackVals[0]
    inputActive = inputActive ? inputActive.toString().slice(0, -1) : inputActive
    inputActive = inputActive ? inputActive : 0
    this.setState({ stack: [inputActive, ...stackVals.slice(1)] })
  }

  drop = () => {
    const stackVals = this.state.stack;
    let inputActive = stackVals[0];
    this.setState({ stack: [inputActive, ...stackVals.slice(2)] })
  }

  clearAll = () => {
    this.setState({ stack: [0] })
  }

  plusMinus = () => {
    const stackVals = this.state.stack
    let inputActive = -1 * parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({ stack: [inputActive, ...stackVals.slice(1)] })
  }

  swap = () => {
    const stackVals = this.state.stack;
    let inputActive = stackVals[0];
    this.setState({ stack: [stackVals[0] = stackVals[1], stackVals[1] = inputActive, ...stackVals.slice(2)] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <table className="calculatrice" id="calc">
            <tbody>
              <tr>
                <td colSpan="4" className="calc_td_resultat">
                  <div className="microActions">
                    <Swap click={() => this.swap()} />
                    <Delete click={() => this.delete()} />
                  </div>
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
                  <Button symbol='±' click={() => this.plusMinus()} />
                </td>
                <td className="button">
                  <Button symbol='/' click={() => this.divisionHandler()} />
                </td>
                <td className="button">
                  <Button symbol='×' click={() => this.multiplication()} />
                </td>
              </tr>
              <tr>
                <td >
                  <Button symbol='1' click={() => this.appendNumber(1)} />
                </td>
                <td >
                  <Button symbol='2' click={() => this.appendNumber(2)} />
                </td>
                <td >
                  <Button symbol='3' click={() => this.appendNumber(3)} />
                </td>
                <td className="button">
                  <Button symbol='-' click={() => this.subtraction()} />
                </td>
              </tr>
              <tr>
                <td >
                  <Button symbol='4' click={() => this.appendNumber(4)} />
                </td>
                <td >
                  <Button symbol='5' click={() => this.appendNumber(5)} />
                </td>
                <td >
                  <Button symbol='6' click={() => this.appendNumber(6)} />
                </td>
                <td className="button">
                  <Button symbol='+' click={() => this.addition()} />
                </td>
              </tr>
              <tr>
                <td >
                  <Button symbol='7' click={() => this.appendNumber(7)} />
                </td>
                <td >
                  <Button symbol='8' click={() => this.appendNumber(8)} />
                </td>
                <td >
                  <Button symbol='9' click={() => this.appendNumber(9)} />
                </td>
                <td className="button enter" rowSpan="2">
                  <Push symbol='Enter' click={() => this.enter()} />
                </td>
              </tr>
              <tr>
                <td className="button">
                  <Drop symbol='D' click={() => this.drop()} />
                </td>
                <td >
                  <Button symbol='0' click={() => this.appendNumber(0)} />
                </td>
                <td >
                  <Button symbol=',' click={() => this.decimal()} />
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
