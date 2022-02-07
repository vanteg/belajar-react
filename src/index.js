import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home.jsx';


//Stateless Component CARA 1 - Untuk ES6 tidak menggunakan ini lagi
// function HelloComponent (){
//   return <p>Hello Stateless Component</p>
// }

// // di ES6 kita bisa menggunakan ini
// const HelloComponent = () =>{
//   return <p>Hello COmponent</p>
// }

// // Statefull Component CARA2
// class StatefullComponent extends React.Component{
//   render(){
//     return <p>Statefull Component</p>
//   }
// }


ReactDOM.render(
  <React.StrictMode>
    <Home /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
