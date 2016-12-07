var enabled = false;

function showLeonardo(status) {
  if (status) {
    chrome.tabs.executeScript(null, {'file': 'src/loader.js'});
  } else {
    chrome.tabs.executeScript(null, {'file': 'src/unloader.js'});
  }
}

function toggleEnabled() {
  enabled = !enabled;
  showLeonardo(enabled);
  chrome.browserAction.setIcon({path: enabled ? 'icon.png' : 'icon-off.png'});
}

chrome.browserAction.onClicked.addListener(toggleEnabled);

// inject();