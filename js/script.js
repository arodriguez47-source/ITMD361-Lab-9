function init(){
  var button = document.getElementById('entrybutton');

  function showText(){
    var text = document.getElementById('entryInput');
    document.getElementById('textoutput').innerHTML = text.value;
    alert('Angel Rodriguez:' + text.value);
  }
  button.addEventListener('click', showText);
}

window.addEventListener('load', init);
