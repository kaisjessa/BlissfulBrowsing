factCheck = function(userSelection) {
	let userText = userSelection.selectionText;
	console.log(userText);
};

chrome.contextMenus.create({
 title: "Fact Check",
 contexts:["selection"],
 onclick: factCheck
});


chrome.browserAction.setBadgeText({text: "badge"});
console.log("test");