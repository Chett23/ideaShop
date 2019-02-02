import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// cart details adding an item to the cart

/*
code to clone divs for cart details. funtion not working. 
Figure out, fix, then uncomment.



// event looking for clicks on our items
document.getElementById("dream").addEventListener("click", addToCart('dream'));
document.getElementById("aspiration").addEventListener("click", addToCart('aspiration'));
document.getElementById("goal").addEventListener("click", addToCart('goal'));
document.getElementById("results").addEventListener("click", addToCart('results'));

var i = 0;


function addToCart(id){
    
    var original = document.getElementById('id' + i);
    var clone = original.cloneNode(true);
    i++;
    clone.id = "dream" + i;
    clone.getElementsByTagName('img')[0].id = "img-item" + i;
    clone.getElementsByTagName('input')[0].id = "select-item-value" + i;
    //below line not needed?
    //original.parentNode.appendChild(clone);
    
}
*/