chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

  }
})


chrome.browserAction.setBadgeText({text: "badge"});
console.log("test");