import React, {useState} from "react";

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleChangeColor(event
    ){
        setColor(event.target.value);
    }
 return(
    <div className="color-picker-container">
        <h2>Color Picker</h2>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected a Color: {color}</p>
        </div>
        <label> Select a Color: </label>
            <input type="color" value={color} onChange={handleChangeColor}/>
    </div>
 );
}

export default ColorPicker;