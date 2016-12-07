
var scriptTag = document.getElementById('_leonardoLoaderScript');
var leonardoElm = document.querySelector('.leonardo-launcher');

if (scriptTag) {
  scriptTag.remove();
}

if (leonardoElm && leonardoElm.parentNode) {
  leonardoElm.parentNode.remove();
}