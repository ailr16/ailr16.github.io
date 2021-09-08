function mostraralerta(){
  alert('hola');
}
function hacerclic(){
  document.getElementsByTagName('p')[0].onclick=mostraralerta;
}
window.onload=hacerclic;
