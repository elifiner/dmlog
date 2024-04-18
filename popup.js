// Response to download button
document.getElementById('downloadBtn').addEventListener('click', function() {
    this.innerHTML = "Downloading...";
    this.disabled = true;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "startDownload"});
    });
});

// Listen for a message from the popup
chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    if (request.action === "completeDownload") {
        window.close();
    }
});
