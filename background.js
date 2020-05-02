function getText() {
	let allInfo = chrome.windows.getCurrent;
	let text = allInfo;
	return text;
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
  	console.log(getText());
  }
})


chrome.browserAction.setBadgeText({text: "badge"});
console.log("test");