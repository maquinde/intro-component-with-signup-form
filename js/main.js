const errorIcons = document.querySelectorAll('.error-icon');
const errorSmalls = document.querySelectorAll('.error-small');
const formControls = document.querySelectorAll('.form-control');
const button = document.querySelector('#submit');

function checkData(event){
    event.preventDefault();
    
    const inputs = document.querySelectorAll('.inputs');

    for(input of inputs){
        
        if(!input.value){

            for(item of errorSmalls){
                item.style.display = 'block';
            }

            for(item of errorIcons){
                item.style.display = 'block';
            }
        }
    }

    



    
}




button.addEventListener('click', checkData);