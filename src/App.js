import './App.css';
import { useState } from "react" 
import { invert } from './util/helpers' 
import ColorInput from './components/ColorInput/ColorInput'
import Button from './components/Button/Button'

function App() {

  let [color, setColor] = useState("#A7AAAF");
  let [invertedColor, setInvertedColor] = useState(invert(color));
  let [addedColors, setAddedColors] = useState([]);
  const maxColors = 7;

  function updateCurrentColors(color) {
    setColor(color);
    setInvertedColor(invert(color));
  }

  function addColor(color) {
    if (addedColors.length >= maxColors) return;
    let newColors = [...addedColors];
    newColors.push(color);
    setAddedColors(newColors);
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

  return (
    <div className="App">
        <div className="main"> 
          <div className="tile main-tile" style={{backgroundColor: color}}>
            <div className="tile-top">
              <ColorInput 
                color={color}
                invertedColor={invertedColor}
                onChange={updateCurrentColors}
              />
            </div>
            <div className="tile-bottom">
              <Button 
                onClick={() => addColor(color)} 
                disabled={addedColors.length >= maxColors}
              >
                  Add
              </Button>
            </div>
          </div>
          {addedColors.map((addedColor, idx) => {
            return (
              <div className="tile" style={{backgroundColor: addedColor}} key={idx}>
                <div className="tile-top"/>
                <div className="tile-bottom">
                  <Button onClick={() => removeColor(addedColor)}>Remove</Button>
                </div>
            </div>
            );
          })}
        </div> 
    </div>
  );
}

export default App;
