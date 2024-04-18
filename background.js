chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "completeDownload") {
        // Create a Blob from the text data
        let blob = new Blob([request.text], {type: 'text/plain'});

        // Read the blob as a Data URL
        let reader = new FileReader();
        reader.onload = function() {
            chrome.downloads.download({
                url: reader.result,
                filename: request.filename
            });
        };
        reader.readAsDataURL(blob);
    }
});
