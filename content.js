async function getTranscript() {
    return new Promise((resolve, reject) => {
      let oldestMessageReached = false;
      let retryCount = 0;
      let allMessages = [];

      const outgoing = document.querySelector('[aria-label="Account menu"]').querySelector('img').getAttribute('alt');
      const incoming = document.querySelector('h2#detail-header').textContent;

      function sanitize(s) {
        return s.replace(/[^\w]/g, '_');
      }

      function scrollAndCapture() {
          const messages = [...document.querySelectorAll('[data-testid="messageEntry"]:not([data-grabbed="true"])')];
          messages.reverse();
          // Capture messages from bottom to top to maintain order
          messages.forEach(msg => {
              msg.setAttribute('data-grabbed', 'true'); // Mark the message as grabbed
              const p = msg.querySelector('[role=presentation]');
              let direction = "LINK";
              if (p) {
                  direction = incoming;
                  const color = window.getComputedStyle(p).getPropertyValue('background-color');
                  if (color === "rgb(29, 155, 240)") {
                    direction = outgoing;
                  }
              }
              allMessages.unshift(direction + ": " + msg.innerText);
          });

          // Scroll to the oldest message in the current view
          if (messages.length > 0) {
              messages.at(-1).scrollIntoView();
          }

          // Check if new messages are loaded
          setTimeout(() => {
              const newCheck = document.querySelectorAll('[data-testid="messageEntry"]:not([data-grabbed="true"])');
              if (newCheck.length === 0) {
                  // No new messages have loaded, might be at the start
                  retryCount++;
                  if (retryCount > 3) { // Arbitrary limit to avoid infinite loops
                      oldestMessageReached = true;
                  }
              } else {
                  retryCount = 0; // Reset retry count if new messages are loaded
              }

              if (!oldestMessageReached) {
                  scrollAndCapture();
              } else {
                  resolve({
                    filename: `${sanitize(outgoing)}-${sanitize(incoming)}.txt`,
                    text: allMessages.join("\n\n")
                  });
              }
          }, 500); // Adjust timing based on network speed and typical load times
      }

      scrollAndCapture();
    });
}

// Listen for a message from the popup
chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    if (request.action === "startDownload") {
        const {filename, text} = await getTranscript();
        chrome.runtime.sendMessage({action: "completeDownload", filename, text});
    }
});
