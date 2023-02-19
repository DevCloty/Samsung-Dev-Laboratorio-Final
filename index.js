
// Extracción de datos de cada campo
const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Validación del formulario
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


// Validación de cada campo
function checkInputs() {
	// trim para eliminar los espacios en blanco
	const nombreValue = nombre.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'Rellene este campo');
	} else if (!isNombre(nombreValue)) {
		setErrorFor(nombre, 'Nombre inválido');
    } else {
		setSuccessFor(nombre);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Rellene este campo');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Rellene este campo');
	} else if (!isPassword(passwordValue)) {
		setErrorFor(password, 'Debe tener entre 8 y 14 caracteres');
    } else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Rellene este campo');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Las claves no coindicen');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// Expresiones regulares para cada campo
function isEmail(email) {
    // Email que pueda contener minúsculas, mayúsculas, números y símbolos. Obligatoria la terminación de correos "@email.dom"
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isNombre(nombre) {
    //Nombre que pueda contener letras minúsculas y mayúsculas, incluyendo tildes. Se excluyen números y símbolos
    return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombre);
}

function isPassword(password) {
    // Contraseña entre 8 y 14 caracteres. Incluyendo minúsculas, mayúsculas, números y símbolos
    return /^.{8,14}$/.test(password);
}
