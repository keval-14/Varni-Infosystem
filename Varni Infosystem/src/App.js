import './App.css';
import {Button, button} from "reactstrap";
import {ToastContainer, toast} from 'react-toastify'
import Header from './components/Header';
import Intro from './components/Intro';
import Services from './components/Services';
import Letsstart from './components/Letsstart';
import Process from './components/Process';
import Technology from './components/Technology';
import Ourservices from './components/Ourservices';


function App() {

  return (
    <>
     {/* <div className='mainhome'> */}
    <Header/>
    <Intro/>
    <Services/>
    <Letsstart/>
    <Process/>
    <Technology/>
    <Ourservices/>

          
    {/* </div> */}
    
    
    </>
        
    
    );
      }

export default App;
