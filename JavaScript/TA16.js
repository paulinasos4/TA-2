window.onload = function() {
    let parrafoVisible = true;
  
const parrafo = document.getElementById('parrafo');
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {

	if (parrafoVisible){
        parrafo.style.display = 'none';
		boton.textContent = 'Mostrar'; 
        parrafoVisible = false;
	} else {
		parrafo.style.display = 'block'; 
		boton.textContent = 'Ocultar'; 
        parrafoVisible = true;
	}
});
}
  
   