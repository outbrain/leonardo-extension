
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, {
    'file': 'src/loader.js'
  });
});

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