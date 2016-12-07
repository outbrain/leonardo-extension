function showLeo() {
    console.log('Enabling Leo');
    chrome.tabs.executeScript(null, {'file': 'src/loader.js'});
    chrome.browserAction.setIcon({path:  'icon.png'});
}

function hideLeo() {
    console.log('Disabling Leo');
    chrome.tabs.executeScript(null, {'file': 'src/unloader.js'});
    chrome.browserAction.setIcon({path: 'icon-off.png'});
}


function invokeToggle() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: "toggleEnabled"}, function(response) {
            console.log(response.status);

            if (response.enabled) {
                showLeo();
            } else {
                hideLeo();
            }
        });
    });
}

chrome.browserAction.onClicked.addListener(invokeToggle);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message == 'showLeo') {
        showLeo();
    }
  }
);