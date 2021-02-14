import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Garage from '../src/components/car';
import { BrowserRouter } from 'react-router-dom';
// import Car from '../src/components/car';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
// const myElement = (
// <table>
//   <tr><th>Fruit Name</th><input type="text"/>
//   <th>Fruit Color</th><input type="text"/>
//   <th>Fruit quantity</th><input type="text"/>
//   <th>Fruit Price</th><input type="text"/>
//   <th>Total</th></tr><input type="text"/>
  

  
// </table>

// )
class Apps extends Component{
  render(){
    return(
      <div>
        <App />
      {/* <Garage /> */}
      </div>
      
    );
  }
}
ReactDOM.render(
  <BrowserRouter>
  <App /></BrowserRouter>,
  document.getElementById('root'));
