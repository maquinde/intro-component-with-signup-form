



const form = document.querySelector('#form');
const button = document.querySelector('#submit');

button.addEventListener('click', checkData);

function checkData(event){
    event.preventDefault();
    const fname = document.querySelector('#fname').value;
    const lname = document.querySelector('#lname').value;
    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#pass').value;

    // const errorIcon = document.querySelector('.error-icon');
    const errorSmall = document.querySelector('.error-small');

    
    if(fname === ''){
        addError();
    } else {
        removeError();
    }




}




function addError(){
    const fcontrol = form.fname.parentNode;
    const img = document.createElement('img');
    fcontrol.querySelector('.error').classList.add('error-border');
    img.classList.add('error-icon');
    img.src = './images/icon-error.svg';
    fcontrol.querySelector('.img').appendChild(img);
    fcontrol.querySelector('.error-small').style.display = 'block';
}




function removeError(){
    const fcontrol = form.fname.parentNode;
    const img = document.createElement('img');

    fcontrol.querySelector('.error').classList.remove('error-border');
    img.classList.remove('error-icon');
    img.src = './images/icon-error.svg';
    fcontrol.querySelector('.img').removeChild(img);
    fcontrol.querySelector('.error-small').style.display = 'none';
}




function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// First name cannot be empty
// Last name cannot be empty
// Looks like this is not an email
// Password cannot be empty

// TODO: HOW TO ADD IMG SRC?