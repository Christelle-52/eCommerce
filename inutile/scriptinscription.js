/*------------------Recuperation des elements-------------------*/
const form = document.querySelector("#form");
const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

/*------------------Evenement-------------------*/
form.addEventListener('submit',e=>{
    e.preventDefault();

    form_verify();
})

/*------------------Fonction-------------------*/
function form_verify() {
    /*------------------Obtenir toutes les valeurs des input-------------------*/
    const nomValue = nom.value.trim();
    const prenomValue = prenom.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    const pwd2Value = password2.value.trim();

    // Nom verify
    if (nomValue === "") {
        let message ="Nom ne peut pas être vide";
        setError(nom,message);
    }else if(!nomValue.match(/^[a-zA-Z]/)){
        let message ="Nom doit commencer par une lettre";
        setError(nom,message)
    }else{
        let letterNum = nomValue.length;
        if (letterNum < 3) {
            let message ="Nom doit avoir au moins 3 caractères";
            setError(nom,message)
        } else {
            setSuccess(nom);
        }
    }

    // Prenom verify
    if (prenomValue === "") {
        let message ="Prénom ne peut pas être vide";
        setError(prenom,message);
    }else if(!prenomValue.match(/^[a-zA-Z]/)){
        let message ="Prénom doit commencer par une lettre";
        setError(prenom,message)
    }else{
        let letterNum = prenomValue.length;
        if (letterNum < 3) {
            let message ="Prénom doit avoir au moins 3 caractères";
            setError(prenom,message)
        } else {
            setSuccess(prenom);
        }
    }

    /*------------------Verif Email-------------------*/
    if (emailValue === "") {
        let message = "Email ne peut pas être vide";
        setError(email,message);
    }else if(!email_verify(emailValue)){
        let message = "Email non valide";
        setError(email,message);
    }else{
        setSuccess(email)
    }
    


    /*------------------verif du mot de passe-------------------*/
    if (pwdValue ==="") {
        let message ="Le passeword ne peut pas être vide";
        setError(password,message)
    }else if(!password_verify(pwdValue)){
        let message = "Le mot de passe doit contenir 8 à 20 caractères, dont un chiffre,une majuscule, une minuscule et 1 caractère spécial";
        setError(password,message)
    }else{
        setSuccess(password);
    }
    /*------------------confirmation du mot de passe-------------------*/
    if (pwd2Value ==="") {
        let message ="Le passeword confirm ne peut pas être vide";
        setError(password2,message)
    }else if( pwdValue !== pwd2Value){
        let message ="Les mot de passes ne correspondent pas";
        setError(password2,message)
    }else{
        setSuccess(password2)
    }
}

function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');
    

    /*------------------Ajout du message d'erreur-------------------*/
    small.innerText = message
    
    /*------------------Ajout la classe error-------------------*/
    formControl.className = "form-control error";
}

function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
}

function email_verify(email) {
    
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(passeword) {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(passeword);

}
/*------------------voir masquer mot de passe-------------------*/

const eye = document.querySelectorAll(".feather-eye");
const eyeoff = document.querySelectorAll(".feather-eye-off");
const passwordField = document.querySelector("#password");
const passwordField2 = document.querySelector("#password2");


eye[0].addEventListener("click", () => {
  eye[0].style.display = "none";
  eyeoff[0].style.display = "block";
  passwordField.type = "text";
});

eyeoff[0].addEventListener("click", () => {
  eyeoff[0].style.display = "none";
  eye[0].style.display = "block";
  passwordField.type = "password";
});

eye[1].addEventListener("click", () => {
  eye[1].style.display = "none";
  eyeoff[1].style.display = "block";
  passwordField2.type = "text";
});

eyeoff[1].addEventListener("click", () => {
  eyeoff[1].style.display = "none";
  eye[1].style.display = "block";
  passwordField2.type = "password";
});

    