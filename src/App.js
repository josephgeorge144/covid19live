
import './App.css';
import {React,Component} from 'react';
import{ Routes,Route,Link} from 'react-router-dom'
import {Navbar, Nav,Card,Button} from 'react-bootstrap';
import India from './India';
import Header from './Header';
import State from './State';
import World from './World';


function App(props) {
  const bigNumbers = [100, 200, 300, 400, 500];
  let smallNumbers;  

  return (
      
    <>
    <Header/>
    <div>{
    

    // Create the smallNumbers array below
   smallNumbers=bigNumbers.map((num,key) =>{

    
    
    
    return <span>{num/10}</span>})
    

    
       
    
        }
        <h1>this is the arrayyasdiurgouq {smallNumbers}</h1>
        <h4>{bigNumbers}</h4>
      
      
      
       
        </div>
    
    </>


 
  
  );
}

export default App;
