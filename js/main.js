



const form = document.querySelector('#form');
const button = document.querySelector('#submit');

button.addEventListener('submit', checkData);

function checkData(event){
    event.preventDefault();
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#pass').value;

    if(fname === ''){
        addError();
    } else {
        removeError();
    }

    if(lname === ''){
        addError();
    } else {
        removeError();
    }

    if(!validateEmail(email)){
        addError();
    } else {
        removeError();
    }

    if(pass === ''){
        addError();
    } else {
        removeError();
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


// TODO: RE-DO CSS TO ADD ERROR CLASS EASILY