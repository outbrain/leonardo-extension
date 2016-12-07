var scriptTag = document.getElementById('_leonardoLoaderScript');
var leonardoElm = document.querySelector('.leonardo-launcher');

console.log(window.Leonardo);
window.Leonardo = {};
console.log(window.Leonardo);

if (scriptTag) {
  scriptTag.remove();
}

if (leonardoElm && leonardoElm.parentNode) {
  leonardoElm.parentNode.remove();
}
console.log("Leo unloaded");
