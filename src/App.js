import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App(props) {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
}

const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
}
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#212529';
      showAlert("Dark mode has been enabled","success");
      //document.title='TextUtils - Dark Mode';
    }
    else{
        setMode('light')
        document.body.style.backgroundColor='white';
        showAlert("Light  mode has been enabled","success");
        //document.title='TextUtils - Light Mode';
      }
    }
  return (
    <>
    {/* {<Navbar title="TextUtils" aboutText="About"/>} */}
    {/* <Navbar/> */}
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText={"About"}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove extra spaces " mode={mode} aboutText="About"/> } />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;
