import React from 'react';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_SERVER;

export default ({ label, endpoint, children }) => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    axios.get(`${API_URL}/${endpoint}`).then((res) => {
      setValue(res.data.value);
    });
  }, [endpoint]);

  return (
    <div className="sensor">
      <label htmlFor="">{label} Sensor:</label>
      <div className="flex mt-auto">
        {children}
        <div className="ml-auto value">{value}</div>
      </div>
    </div>
  );
};
