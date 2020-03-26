chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
	chrome.tabs.getSelected(null, function (currentTab) {
		if (currentTab && currentTab.url && currentTab.url.includes("backlog")) {
			chrome.tabs.executeScript(currentTab.id, {file: "remover.js"});
		}
	});
});
