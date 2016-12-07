function showLeo() {
  chrome.tabs.executeScript(null, {'file': 'src/loader.js'});
  chrome.browserAction.setIcon({path: 'icons/icon.png'});
}

function hideLeo() {
  chrome.tabs.executeScript(null, {'file': 'src/unloader.js'});
  chrome.browserAction.setIcon({path: 'icons/icon-off.png'});
}


function invokeToggle() {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "toggleEnabled"}, function (response) {
      response.enabled ? showLeo() : hideLeo();
    });
  });
}

chrome.browserAction.onClicked.addListener(invokeToggle);

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.message == 'showLeo') {
      showLeo();
    }
  }
);