function invokeToggle() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {func: "toggleEnabled"}, function(response) {
            console.log(response.status);

            if (response.enabled) {
                chrome.tabs.executeScript(null, {'file': 'src/unloader.js'});
            } else {
                chrome.tabs.executeScript(null, {'file': 'src/loader.js'});

            }

            if (response.enabled) {
                console.log('Enabling Leo');
                newIcon = 'icon.png';
            } else {
                console.log('Disabling Leo');
                newIcon = 'icon-off.png';
            }

            chrome.browserAction.setIcon({path: newIcon});
        });
    });
}

function showLeonardo(status) {
  if (status) {
    chrome.tabs.executeScript(null, {'file': 'src/loader.js'});
  } else {
    chrome.tabs.executeScript(null, {'file': 'src/unloader.js'});
  }
}

chrome.browserAction.onClicked.addListener(invokeToggle);

// inject();