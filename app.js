//regex for email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const buttonclicked = "false";

const validatForm =()=>{
    const inputs = document.querySelectorAll('input');
    const errors = document.querySelectorAll('.error');
    inputs.forEach((input)=> input.classList.remove('invalid'));
     errors.forEach((error)=> error.textContent = '');


     let invalid = false;
    //firstName validation
    const firstName = document.querySelector('#firstName');
    const firstNameErr = document.querySelector('.first-name-err');

    if (firstName.value == ''){
        firstNameErr.textContent = 'This field is required';   
        firstName.classList.add('invalid');  
        invalid = true;   
    }
    if(/^\d/.test(firstName.value)){
        firstNameErr.textContent = 'Text should not contain a number';
        firstName.classList.add(invalid);
        invalid =  true;
    }
    //lastname validation
    const lastname = document.querySelector('#lastname');
    const lastname_err = document.querySelector('.lastname');

    if (lastname.value == ''){
        lastname_err.textContent = 'This field is required';
        lastname.classList.add('invalid');
        invalid = true;
    }
    if(/^\d/.test(lastname.value)){
        lastname_err.textContent = ' Input should not start with a number';
        lastname.classList.add('invalid');
        invalid = true;
    }
    //email validation
    const emailRegex = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';
    const email = document.querySelector('#email');
    const email_err = document.querySelector('.email-err');

    if(email.value.trim() == ''){
        email_err.textContent = 'This field is required';
        email.classList.add('invalid');
        invalid = true;
    }
    if(!emailRegex.test(email.value.trim())){
        email_err.textContent = 'Invalid email address';
        email.classList.add('invalid');
        invalid = true;
    }
    // validate button
    if(!buttonclicked){
        query_err.textContent = "Please select a query type";
        invalid = true;
    }
}
document.querySelector('#form').addEventListener('submit', (event)=>{
    event.preventDefault();
    validatForm();
})

const general_query = document.querySelector('.general_query');
const general_query_img = document.querySelector('.general-query > span >img');
const support_request = document.querySelector('.support-request');
const support_request_img = document.querySelector('.support-request > span > img');
const query_err = document.querySelector('.query-error');
console.log(query_err);

general_query.onclick =()=>{
    general_query.classList.add('selected');
    general_query_img.style.display = "block";
    support_request_img.classList.remove('selected');
    support_request_img.style.display = "none";
    buttonclicked = true;
}
 support_request.onclick = ()=>{
    support_request.classList.add('selected');
    support_request_img.style.display = "block";
    general_query_img.classList.remove('selected');
    general_query_img.style.display = "none";
    buttonclicked = true;
}