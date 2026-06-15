function validateForm(){

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

if (name === '' || email === '' || message === '') {
    alert("Todos os campos devem ser preenchidos");
    return false;
}

if (name.length < 3 || name.length > 50) {
    alert("O nome deve ter entre 3 e 50 caracteres");
    return false;
}

if (email.length < 5 || email.length > 50) {
    alert("O email deve ter entre 5 e 50 caracteres");
    return false;
}

const emailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPatern.test(email)) {
    alert("Por favor, insira um email valido");
    return false;
}

return true;
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    if (validateForm()) {
        alert("Formulario validado!");
    }
})