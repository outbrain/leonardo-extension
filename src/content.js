var leoEnabled = !!localStorage.getItem('leonardo-enabled');

if (leoEnabled) {
  chrome.runtime.sendMessage({message: 'showLeo'});
}

// Listen on messages from background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.message) {
    case 'toggleEnabled':
      sendResponse({status: 'ok', enabled: toggleEnabled()});
      break;
    case 'isLeoEnabled':
      sendResponse({status: 'ok', enabled: leoEnabled});
      break;
  }
});


function setEnabled(enabled) {
  leoEnabled = enabled;
  localStorage.setItem('leonardo-enabled', enabled);
  return enabled;
}

function toggleEnabled() {
  return setEnabled(leoEnabled);
}