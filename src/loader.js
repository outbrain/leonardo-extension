console.log('Loaded!');

function inject() {
  var script   = document.createElement('script');
  script.type  = 'text/javascript';
  script.src   = 'http://outbrain.github.io/Leonardo/dist/leonardo.js';
  document.body.appendChild(script);
}

inject();