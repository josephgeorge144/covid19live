import React, { Component } from 'react';
import {Navbar, Nav,Card,Button,Badge} from 'react-bootstrap';
import State from './State';

class India extends Component {
    constructor(){
        super();
        this.state={
          totalcases:0
        }
    
        
}
    render() {
      const tcase=(totalcases)=>{
        this.setState({totalcases:totalcases})
        
      }
      
      
      return (
            <div>
                <h1>India</h1>
                <div className='container-fluid'>
               

     
      <div className='row'>
        <div className='col-md-12'></div>
        
        </div>
      
      <div className='col-md-12'>

        <div className='row text-center'>

          <div className='col-md-3'>
       
       <Card className=' badge  text-dark texr-center  text-wrap' style={{ width: '18rem' ,backgroundColor:'red'}}>
      <Card.Img variant="top" className='image-fluid' src="https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body  text-center>
        <Card.Title>Total Cases</Card.Title>
        <h3>1848449</h3>
        <Card.Text>
         Today:[266]
        </Card.Text>
        </Card.Body>
    </Card>
</div>

          <div className='col-md-3'>
          <Card className=' badge  text-dark texr-center  text-wrap' style={{ width: '18rem' ,backgroundColor:'white'}}>
      <Card.Img variant="top" className='image-fluid' src="https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body  text-center>
        <Card.Title>Active Cases</Card.Title>
        <h3>18489</h3>
        <Card.Text>
         Today:[266]
        </Card.Text>
        </Card.Body>
    </Card>
    </div>

          <div className='col-md-3'>
          <Card className=' badge  text-dark texr-center  text-wrap' style={{ width: '18rem' ,backgroundColor:'green'}}>
      <Card.Img variant="top" className='image-fluid' src="https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body  text-center>
        <Card.Title>    Recovered Cases</Card.Title>
        <h3>1449</h3>
        <Card.Text>
         Today:[266]
        </Card.Text>
        </Card.Body>
    </Card>
    </div>

          <div className='col-md-3'><Card className=' badge  text-dark texr-center  text-wrap' style={{ width: '18rem' ,backgroundColor:'yellow'}}>
      <Card.Img variant="top" className='image-fluid' src="https://images.pexels.com/photos/3699921/pexels-photo-3699921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body  text-center>
        <Card.Title>Total Deaths</Card.Title>
        <h3>184</h3>
        <Card.Text>
         Today:[266]
        </Card.Text>
        </Card.Body>
    </Card></div>
          

        </div>
        
      </div>

      <div className='col-md-12'>
        <State tcase={this.tcase}/> 


      
      </div>
      
      
      


    
  
    </div>
  
 
            </div>
        );
    }
}

export default India;