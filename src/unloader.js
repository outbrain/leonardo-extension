
var leonardoElm = document.querySelector('.leonardo-launcher');

window.postMessage('leonardo:toggle:states', '*');

if (leonardoElm && leonardoElm.parentNode && leonardoElm.parentNode.style) {
  leonardoElm.parentNode.style.display = 'none';
}

window.location = 'javascript:console.log(window.Leonardo.toggleActivateAll(false))';