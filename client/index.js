import './stylesheets/style.css';
import './stylesheets/mystyles.css';

console.log("Webpack working!!");
//default parameters estan disponibles solo en ES6/2015
let show = (m = "hola, Hot Module Replacement Working") => { 
    alert(m)
};
show();

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('resolve')
        }, 2000);
    });
}
async function asyncCall() {
    console.log("calling an async function");
    const result = resolveAfter2Seconds();
    console.log(result);
}

asyncCall();