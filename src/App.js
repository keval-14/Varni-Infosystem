import './App.css';
import {Button, button} from "reactstrap";
import {ToastContainer, toast} from 'react-toastify'
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';


function App() {

  return (
    <>
     <div className='mainhome'>
    <Header/>
    <Home/>
    <Services/>

          
    </div>
    
    
    </>
        
    
    );
      }

export default App;
