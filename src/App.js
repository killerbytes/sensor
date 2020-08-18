import React from 'react';
import Sensor from 'components/Sensor';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_SERVER;

function App() {
  const handleClick = async (type) => {
    switch (type) {
      case 'HIGH':
        await axios.post(`${API_URL}/Set_Fixed_ScreenBrightness?cmd1=0&cmd2=0`);
        break;
      case 'LOW':
        await axios.post(`${API_URL}/Set_Fixed_ScreenBrightness?cmd1=0&cmd2=0`);
        break;
      case 'AUTO':
        await axios.post(`${API_URL}/Set_Fixed_ScreenBrightness?cmd1=0&cmd2=0`);
        break;
      default:
        //RESET
        await axios.post(`${API_URL}/Set_Fixed_ScreenBrightness?cmd1=0&cmd2=0`);
        break;
    }
    window.location.reload();
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Sensor label="Temperature" endpoint="Get_Temperaser" />
        <Sensor label="Door" endpoint="Get_Cur_Door_Status" />
        <Sensor label="Humidity" endpoint="Get_Cur_Door_Status" />
        <Sensor label="Current" endpoint="Get_Cur_Temp" />
        <Sensor label="Voltage" endpoint="Get_Cur_Door_Status" />
        <Sensor label="Brightness" endpoint="Get_Cur_Door_Status">
          <div className="items-center  gap-2 grid grid-flow-col">
            <button onClick={() => handleClick('HIGH')}>High</button>
            <button onClick={() => handleClick('LOW')}>Low</button>
            <button onClick={() => handleClick('AUTO')}>Auto</button>
            <button onClick={() => handleClick('RESET')}>Reset</button>
          </div>
        </Sensor>
      </div>
    </>
  );
}

export default App;
