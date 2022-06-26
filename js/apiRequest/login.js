
let loginBtn = document.getElementById('loginBtn');
let emailInp = document.getElementById('email');
let passwordInp = document.getElementById('password');



async function login(){

    let loginData = {
        "email": emailInp.value,
        "password": passwordInp.value
    }

    let response = await fetch ('http://127.0.0.1:8000/api/login',{
        method : 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(loginData)
    });
    let finalRespone = await response.json();

    if (finalRespone.message != 'success'){
        document.querySelector('.alert-danger').classList.replace('d-none','d-block')
        document.querySelector('.alert-danger').innerHTML =finalRespone.message
    } else {
        window.location.href="index.html"
    }
    console.log(finalRespone);
    
}

loginBtn.addEventListener('click',login)