import logo from './logo.svg';
import './App.css';
import { useState } from "react" 

function App() {

  let [color, setColor] = useState("#000000");
  let [addedColors, setAddedColors] = useState([]);

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


  return (
    <div className="App">
        <div className="main"> 
          <div className="tile main-tile" style={{backgroundColor: color}}>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
            <button onClick={() => addColor(color)}>Add</button>
          </div>
          {addedColors.map(addedColor => {
            return (
              <div className="tile" style={{backgroundColor: addedColor}}>
                <button onClick={() => removeColor(addedColor)}>Remove</button>
            </div>
            );
          })}
        </div> 
    </div>
  );
}

export default App;
