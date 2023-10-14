import React from 'react';
import ColorPicker from './Component/ColorPicker';

function App() {
  const colors = ['#FF5733', '#FFC300', '#33FF57', '#3360FF', '#A033FF'];

  return (
    <div className="App">
      <center><h1>Color Picker App</h1></center>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
