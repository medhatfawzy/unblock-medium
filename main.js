chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    var activeTab = tabs[0];
    // var pendingTabURL = activeTab.pendingUrl;
    var activeTabURL = activeTab.url;
    
    if (activeTabURL.includes("https://medium.com/")){
        chrome.tabs.update({
            url: `https://mirror-medium.com/?m=${activeTabURL}`,
        }
        )
        
    }
});
