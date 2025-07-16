// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Alert from '@mui/material/Alert';
// import CheckIcon from '@mui/icons-material/Check';
// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";
function App() {
  // const [count, setCount] = useState(0);
  // let handleClick = () => {
  //   console.log("button was clicked");
  // }

  return (
    <>
      <WeatherApp />  
      {/* Replace this with the actual WeatherApp component when it's ready */}
      {/* <SearchBox/>
      <InfoBox/> */}
      {/* <h1>Material UI Demo</h1>
      <Button variant="contained" onClick={handleClick} color="error" size="large" startIcon={<DeleteIcon />}>Click Me</Button>
      {/* <Button  variant="contained"   onClick={handleClick} disabled>Fill form</Button>
      {/* <Button variant="outlined">Click ME</Button> */}
      {/* <Button variant="text">Get Started</Button> */} 
      {/* <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">Delete option is given </Alert> */} 
    </>
  );
}

export default App;
