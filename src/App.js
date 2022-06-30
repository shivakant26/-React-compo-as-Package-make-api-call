
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getData } from './lib/Redux/Action/userAction';
const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log("called")
    dispatch(getData());
  },[])
  return (
    <div className="App">
      <h1>hellow</h1>
    </div>
  );
}

export default App;
