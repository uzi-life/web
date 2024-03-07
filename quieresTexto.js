var acc = document.getElementsByClassName("caja_texto"); /*Utilizara el elemento caja-texto */
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() { /*Escuha los eventos de cllick */
    this.classList.toggle("active"); 
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}