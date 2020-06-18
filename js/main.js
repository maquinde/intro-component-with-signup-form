const form = document.querySelector('#form');
const button = document.querySelector('#submit');

button.addEventListener('click', checkData);




function checkData(event){
    event.preventDefault();

    const fname = form['fname'].value;
    const lname = form['lname'].value;
    const email = form['email'].value;
    const pass = form['pass'].value;

    if(fname === ''){
        //turn on error-icon and error-small. add error-border to form-control
    } else {
        //create function to remove classes or turn stuff off
    }
    
}


function addError(){
    
}

function removeError(){

}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
