document.addEventListener("DOMContentLoaded", function() {

    const lista = document.getElementById("lista");  
    const input = document.getElementById("input"); 
    const boton = document.getElementById("boton");  
    boton.addEventListener("click", function() {  
      const texto = input.value.trim();  
      if (texto !== "") {  
        const nuevoLi = document.createElement("li");  
        nuevoLi.textContent = texto;  
        lista.appendChild(nuevoLi);  
        input.value = "";
  
      }
    });
  
  });