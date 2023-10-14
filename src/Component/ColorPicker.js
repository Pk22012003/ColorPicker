import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker">
      <div className="color-options">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      {selectedColor && (
        <div className="selected-color">
          Selected Color: {selectedColor}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
