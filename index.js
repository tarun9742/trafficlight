const trafficLight = document.getElementById('traffic-light');
const red = document.getElementById('light1');
const yellow = document.getElementById('light2');
const green = document.getElementById('light3');
const button = document.getElementById('btn1')

function fun1(){
    setTimeout( function (){
        red.style.backgroundColor = "red";
    }, 100)
    
    setTimeout( function (){
        red.style.backgroundColor = "white";
    }, 4000)
    
    
    setTimeout( function (){
        yellow.style.backgroundColor = "yellow";
    }, 4000)
    
    setTimeout( function (){
        yellow.style.backgroundColor = "white";
    }, 5000)
    
    
    setTimeout( function (){
        green.style.backgroundColor = "green";
    }, 5000)
    
    setTimeout( function (){
        green.style.backgroundColor = "white";
    }, 8000)
    
    
}
setInterval(function(){
    button.click();
},8000);