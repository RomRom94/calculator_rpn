import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    stack: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <table class="calculatrice" id="calc">
            <tr>
              <td colspan="4" class="calc_td_resultat">
                <input type="text" readonly="readonly" name="calc_resultat" id="calc_resultat" class="calc_resultat"
                  onkeydown="javascript:key_detect_calc('calc',event);" />
              </td>
            </tr>
            <tr>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="CE" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="&larr;" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="%" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="+" />
              </td>
            </tr>
            <tr>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="7" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="8" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="9" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="-" />
              </td>
            </tr>
            <tr>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="4" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="5" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="6" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="x" />
              </td>
            </tr>
            <tr>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="1" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="2" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="3" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="&divide;" />
              </td>
            </tr>
            <tr>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="0" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="&plusmn;" />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="," />
              </td>
              <td class="calc_td_btn">
                <input type="button" class="calc_btn" value="=" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;