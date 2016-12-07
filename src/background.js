console.log('Inject');

function inject() {
  var link = 'http://outbrain.github.io/Leonardo/dist/leonardo.js';
  var script = document.createElement('script');
  script.innerHTML = link;
  document.head.appendChild(script);
}

var enabled;
function toggleEnabled() {
    var newIcon;
    if (enabled) {
        console.log("Disabling Leo");
        enabled = false;
        newIcon = 'icon-off.png';
    } else {
        console.log("Enabling Leo");
        enabled = true;
        newIcon = 'icon.png';
    }
    
    chrome.browserAction.setIcon({
            path: newIcon
//        ,
//            tabId: sender.tab.id
        });
}

chrome.browserAction.onClicked.addListener(toggleEnabled);

// inject();