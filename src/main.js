console.log('Inject');

function inject() {
  var link = 'http://outbrain.github.io/Leonardo/dist/leonardo.js';
  var script = document.createElement('script');
  script.innerHTML = link;
  document.head.appendChild(script);
}

// inject();