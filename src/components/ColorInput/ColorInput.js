import './colorInput.css';

const ColorInput = ({ color, invertedColor, onChange }) => {
    
    return ( 
        <>
            <input 
                type="color" 
                id="color-input" 
                value={color} 
                onChange={(e) => onChange(e.target.value)}  
            />
            <label 
                htmlFor="color-input" 
                className="color-input-label"
                style={{backgroundColor: invertedColor}}
            />
        </>
     );
}
 
export default ColorInput;