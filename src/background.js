var enabled = false;

function toggleEnabled() {
  var newIcon;

  if (enabled) {
    console.log('Disabling Leo');
    newIcon = 'icon-off.png';
    chrome.tabs.executeScript(null, {'file': 'src/unloader.js'});
  } else {
    chrome.tabs.executeScript(null, {'file': 'src/loader.js'});
    console.log('Enabling Leo');
    newIcon = 'icon.png';
  }
  enabled = !enabled;

  chrome.browserAction.setIcon({path: newIcon});
}

chrome.browserAction.onClicked.addListener(toggleEnabled);

// inject();