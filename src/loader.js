console.log('Loaded!');

function inject() {
  var protocol = window.location.protocol.startsWith('https') ? 'https' : 'http';
  var script   = document.createElement('script');
  script.id    = '_leonardoLoaderScript';
  script.type  = 'text/javascript';
  script.src   = protocol + '://outbrain.github.io/Leonardo/dist/leonardo.js';

  document.body.appendChild(script);
}

var leonardoElm = document.querySelector('.leonardo-launcher');
if (leonardoElm && leonardoElm.parentNode && leonardoElm.parentNode.style) {
  leonardoElm.parentNode.style.display = 'block';
  window.location = 'javascript:window.Leonardo && window.Leonardo.toggleActivateAll(true)';
} else {
  inject();
}