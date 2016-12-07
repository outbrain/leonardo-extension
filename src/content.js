console.log("Leonardo extension");

// Listen on messages from background
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message == "toggleEnabled") {
            var enabled = toggleEnabled();
            sendResponse({status: "ok", enabled: enabled});
            return;
        }
        if (request.message == 'isLeoEnabled') {
            sendResponse({status: "ok", enabled: isEnabled()});
            return;
        }
    });


function isEnabled() {
    var enabled = localStorage.getItem('leonardo-enabled');
    if (enabled === null) {
        return false;
    }
    return JSON.parse(enabled);
}

function setEnabled(enabled) {
    localStorage.setItem('leonardo-enabled', enabled);
}

function toggleEnabled() {
    var newIcon;

    setEnabled(!isEnabled());

    return isEnabled();
}

if (isEnabled()) {
    chrome.runtime.sendMessage({message: "showLeo"}, function(response) {
    });
}