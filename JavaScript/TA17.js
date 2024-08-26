const contadorElement = document.getElementById('contador');
const boton = document.getElementById('boton');
let contador = 0; 

boton.addEventListener('click', () => {
	contador++; 
	contadorElement.textContent = contador.toString(); 
});