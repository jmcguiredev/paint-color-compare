import logo from './logo.svg';
import './App.css';
import { useState } from "react" 

function App() {

  let [color, setColor] = useState("#A7AAAF");
  let [invertedColor, setInvertedColor] = useState(invert(color));
  let [addedColors, setAddedColors] = useState([]);

  function updateCurrentColors(color) {
    setColor(color);
    setInvertedColor(invert(color));
  }

  function addColor(color) {
    let newColors = [...addedColors];
    newColors.push(color);
    setAddedColors(newColors);
    console.log(addedColors);
  }

  function removeColor(color) {
    let newColors = [...addedColors];
    let index = newColors.indexOf(color);
    if (index > -1) {
      newColors.splice(index, 1);
    }
    setAddedColors(newColors);
    console.log(addedColors);
  }
  function invert(color) {
    if (color.indexOf('#') === 0) {
      color = color.slice(1);
    }
    // convert 3-digit color to 6-digits.
    if (color.length === 3) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    if (color.length !== 6) {
        throw new Error('Invalid color color.');
    }
    // invert color components
    var r = (255 - parseInt(color.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(color.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(color.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
  } 

  function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}



  return (
    <div className="App">
        <div className="main"> 
          <div className="tile main-tile" style={{backgroundColor: color}}>
            <div className="tile-top">
              <input type="color" className="color-input" value={invertedColor} onChange={e => updateCurrentColors(e.target.value)}  />
            </div>
            <div className="tile-bottom">
              <button onClick={() => addColor(color)}>Add</button>
            </div>
          </div>
          {addedColors.map(addedColor => {
            return (
              <div className="tile" style={{backgroundColor: addedColor}}>
                <div className="tile-top"/>
                <div className="tile-bottom">
                  <button onClick={() => removeColor(addedColor)}>Remove</button>
                </div>
            </div>
            );
          })}
        </div> 
    </div>
  );
}

export default App;
